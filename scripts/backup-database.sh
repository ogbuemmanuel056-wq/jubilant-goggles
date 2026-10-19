#!/usr/bin/env bash
set -euo pipefail

if [ -z "${DATABASE_URL:-}" ]; then
  echo "DATABASE_URL is not configured. Set it in Vercel Project Settings or your local environment before running a backup." >&2
  exit 0
fi

echo "Run your provider-specific backup command here, for example: pg_dump or a managed snapshot command."
echo "This repository is prepared for Vercel deployment, but the actual backup is executed by the database provider."
