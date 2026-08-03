"""Endpoint de réception des messages de contact."""

from fastapi import APIRouter, BackgroundTasks, Depends, Request
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import ContactMessage
from app.rate_limit import limiter
from app.config import get_settings
from app.schemas import ContactCreate, ContactResponse
from app.services.email import send_notification

router = APIRouter(prefix="/api", tags=["contact"])
settings = get_settings()


@router.post("/contact", response_model=ContactResponse, status_code=201)
@limiter.limit(settings.contact_rate_limit)
def create_contact(
    request: Request,  # noqa: ARG001 — requis par slowapi.
    payload: ContactCreate,
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db),
) -> ContactResponse:
    """Enregistre un message et déclenche une notification e-mail asynchrone."""
    message = ContactMessage(
        full_name=payload.full_name,
        email=str(payload.email),
        company=payload.company,
        phone=payload.phone,
        subject=payload.subject.value,
        message=payload.message,
    )
    db.add(message)
    db.commit()
    db.refresh(message)

    background_tasks.add_task(send_notification, payload)

    return ContactResponse(id=message.id)
