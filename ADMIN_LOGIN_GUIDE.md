# Admin Login Guide

## Required configuration

Set these environment variables in local development and Vercel Production:

- `DATABASE_URL`
- `SESSION_SECRET` generated with `openssl rand -base64 32`
- `RESEND_API_KEY`, `EMAIL_FROM`, and `ADMIN_NOTIFICATION_EMAIL` for email notifications
- `BLOB_READ_WRITE_TOKEN` or Vercel Blob OIDC configuration for private document storage
Run the SQL files in `scripts/` in numeric order. The migrations add applicant passwords, support replies, application numbers, password resets, applicant-linked support, login-attempt auditing, private document storage metadata, document audit logs, and revocable sessions.
Admins can download applicant documents and approve or reject them with notes. Document views, downloads, and review actions are audited.

Never commit `.env.local`, passwords, API keys, or database credentials.

## Database setup

Run the SQL files in `scripts/` in numeric order. The migrations add applicant passwords, support replies, application numbers, password resets, applicant-linked support, and login-attempt auditing.

Generate admin password hashes with:

```bash
node scripts/hash-password.js your-secure-password
```

Do not store plaintext credentials in documentation or source control.

For the current seeded admin account, set `DATABASE_URL` and run:

```bash
pnpm admin:repair
```

This repairs the admin record using the hash in `scripts/004-create-admin-ogbuemmanuel.sql`.
Run `pnpm migrate` afterward to apply the latest application schema, including separate surname,
first-name, and other-names fields.

## Admin access

Sign in from the homepage using an admin email and password. Authenticated admins can review, approve, reject, or delete applications, view contact questions, and send replies.

Admin sessions are signed, expire after 24 hours, and are checked against the database. Failed and successful login attempts are recorded, and repeated failed attempts are throttled.

## Applicant access

Applicants sign in with their email address or generated application number and password. Password reset links require the applicant email address, expire after 60 minutes, and can be used once.

## Operational requirements

- Enable HTTPS in production.
- Configure database backups and periodically test restoration.
- Configure error monitoring for database, authentication, and email failures.
- Publish privacy, retention, and terms policies before collecting real applicant data.
