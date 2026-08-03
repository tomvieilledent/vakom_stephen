"""Notification e-mail (best-effort) à la réception d'un message."""

import logging
import smtplib
from email.message import EmailMessage

from app.config import get_settings
from app.schemas import ContactCreate

logger = logging.getLogger("uvicorn.error")


def send_notification(payload: ContactCreate) -> None:
    """Envoie un e-mail de notification si le SMTP est configuré.

    L'échec d'envoi ne doit jamais faire échouer la requête HTTP : le message
    est déjà persisté en base. On journalise simplement l'erreur.
    """
    settings = get_settings()
    if not settings.email_enabled:
        logger.info("Notification e-mail désactivée (SMTP non configuré).")
        return

    msg = EmailMessage()
    msg["Subject"] = f"[Site] Nouveau message — {payload.subject.value}"
    msg["From"] = settings.smtp_from or settings.smtp_user
    msg["To"] = settings.notify_to
    msg["Reply-To"] = payload.email
    msg.set_content(
        f"Nom : {payload.full_name}\n"
        f"E-mail : {payload.email}\n"
        f"Organisation : {payload.company or '—'}\n"
        f"Téléphone : {payload.phone or '—'}\n"
        f"Sujet : {payload.subject.value}\n\n"
        f"{payload.message}\n"
    )

    try:
        with smtplib.SMTP(settings.smtp_host, settings.smtp_port, timeout=10) as server:
            server.starttls()
            if settings.smtp_user:
                server.login(settings.smtp_user, settings.smtp_password)
            server.send_message(msg)
        logger.info("Notification e-mail envoyée à %s.", settings.notify_to)
    except Exception:  # noqa: BLE001 — best-effort, on ne propage pas.
        logger.exception("Échec de l'envoi de la notification e-mail.")
