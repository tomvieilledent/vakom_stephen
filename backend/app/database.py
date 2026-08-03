"""Configuration de la base de données (SQLAlchemy)."""

from collections.abc import Iterator

from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, Session, sessionmaker

from app.config import get_settings

settings = get_settings()

# `check_same_thread` requis uniquement pour SQLite.
connect_args = (
    {"check_same_thread": False} if settings.database_url.startswith("sqlite") else {}
)

engine = create_engine(settings.database_url, connect_args=connect_args, pool_pre_ping=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


class Base(DeclarativeBase):
    """Base déclarative des modèles ORM."""


def get_db() -> Iterator[Session]:
    """Dépendance FastAPI fournissant une session de base de données."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def init_db() -> None:
    """Crée les tables si elles n'existent pas."""
    from app import models  # noqa: F401  (enregistre les modèles)

    Base.metadata.create_all(bind=engine)
