"""Schémas Pydantic (validation des entrées/sorties)."""

from enum import Enum

from pydantic import BaseModel, EmailStr, Field, field_validator


class Subject(str, Enum):
    management = "management"
    recrutement = "recrutement"
    cohesion = "cohesion"
    talents = "talents"
    autre = "autre"


class ContactCreate(BaseModel):
    """Charge utile du formulaire de contact."""

    full_name: str = Field(alias="fullName", min_length=2, max_length=80)
    email: EmailStr
    company: str | None = Field(default=None, max_length=120)
    phone: str | None = Field(default=None, max_length=30)
    subject: Subject
    message: str = Field(min_length=20, max_length=2000)
    consent: bool
    # Champ piège anti-spam : doit rester vide.
    website: str | None = Field(default=None)

    model_config = {"populate_by_name": True}

    @field_validator("consent")
    @classmethod
    def consent_required(cls, value: bool) -> bool:
        if value is not True:
            raise ValueError("Le consentement est requis.")
        return value

    @field_validator("website")
    @classmethod
    def honeypot_must_be_empty(cls, value: str | None) -> str | None:
        if value:
            raise ValueError("Requête invalide.")
        return value


class ContactResponse(BaseModel):
    """Réponse renvoyée après enregistrement d'un message."""

    id: int
    status: str = "received"
    detail: str = "Votre message a bien été reçu."
