"""Limiteur de débit partagé (slowapi).

Le stockage est configurable : mémoire en développement (par défaut), Redis en
production pour partager les compteurs entre plusieurs instances.
"""

from slowapi import Limiter
from slowapi.util import get_remote_address

from app.config import get_settings

_settings = get_settings()

limiter = Limiter(
    key_func=get_remote_address,
    storage_uri=_settings.rate_limit_storage_uri,
)
