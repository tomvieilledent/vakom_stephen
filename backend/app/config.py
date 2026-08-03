"""Configuration applicative chargée depuis l'environnement."""

from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Paramètres de l'application (surchargés par les variables d'env)."""

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    app_name: str = "API Contact — Consultant Vakom"
    environment: str = "development"

    # SQLite en développement, PostgreSQL en production (DATABASE_URL).
    database_url: str = "sqlite:///./contact.db"

    # Origines autorisées pour CORS (séparées par des virgules).
    cors_origins: str = "http://localhost:5173,http://localhost:4173"

    # Notification e-mail (SMTP) — optionnelle.
    smtp_host: str = ""
    smtp_port: int = 587
    smtp_user: str = ""
    smtp_password: str = ""
    smtp_from: str = ""
    notify_to: str = ""

    # Limite de requêtes sur l'endpoint de contact.
    contact_rate_limit: str = "5/minute"
    # Backend de stockage du rate-limiter. "memory://" en dev ;
    # "redis://host:6379" en production multi-instances.
    rate_limit_storage_uri: str = "memory://"

    @property
    def cors_origin_list(self) -> list[str]:
        return [o.strip() for o in self.cors_origins.split(",") if o.strip()]

    @property
    def email_enabled(self) -> bool:
        return bool(self.smtp_host and self.notify_to)


@lru_cache
def get_settings() -> Settings:
    return Settings()
