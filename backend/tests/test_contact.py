"""Tests d'intégration de l'API de contact."""

import os

os.environ.setdefault("DATABASE_URL", "sqlite:///./test_contact.db")

import pytest
from fastapi.testclient import TestClient

from app.main import app

VALID = {
    "fullName": "Marie Dupont",
    "email": "marie@example.com",
    "subject": "management",
    "message": "Bonjour, je souhaite un accompagnement pour mes managers.",
    "consent": True,
}


@pytest.fixture
def client():
    with TestClient(app) as c:
        yield c


def test_health(client):
    res = client.get("/api/health")
    assert res.status_code == 200
    assert res.json()["status"] == "ok"


def test_valid_submission(client):
    res = client.post("/api/contact", json=VALID)
    assert res.status_code == 201
    body = res.json()
    assert body["status"] == "received"
    assert isinstance(body["id"], int)


def test_consent_required(client):
    res = client.post("/api/contact", json={**VALID, "consent": False})
    assert res.status_code == 422


def test_honeypot_rejected(client):
    res = client.post("/api/contact", json={**VALID, "website": "http://spam"})
    assert res.status_code == 422


def test_message_too_short(client):
    res = client.post("/api/contact", json={**VALID, "message": "court"})
    assert res.status_code == 422


def test_invalid_email(client):
    res = client.post("/api/contact", json={**VALID, "email": "not-an-email"})
    assert res.status_code == 422


def teardown_module(_module):
    for name in ("test_contact.db",):
        if os.path.exists(name):
            os.remove(name)
