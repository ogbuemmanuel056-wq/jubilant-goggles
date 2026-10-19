#!/usr/bin/env bash
set -euo pipefail

if [ -z "${DATABASE_URL:-}" ]; then
  echo "DATABASE_URL is not configured. Set it in Vercel Project Settings or your local environment before running a restore." >&2
  exit 0
fi

echo "Run your provider-specific restore command here, for example: psql or a managed database restore workflow."
echo "This repository is prepared for Vercel deployment, but the actual restore is executed by the database provider."
