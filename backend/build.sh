#!/usr/bin/env bash
set -o errexit

python -m pip install --upgrade pip
pip install -r requirements.txt
python manage.py collectstatic --noinput

# Use Neon's direct connection for migrations when configured.
# The pooled DATABASE_URL remains the runtime connection for the web service.
if [ -n "${MIGRATION_DATABASE_URL:-}" ]; then
  DATABASE_URL="$MIGRATION_DATABASE_URL" python manage.py migrate
else
  python manage.py migrate
fi
