# v0-project-ogbue-wj

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_aheVgRJS6nhYNRN6yAEtsETMR0Oe)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploying to Vercel

Import this repository into Vercel. The included `vercel.json` uses the pnpm lockfile and Next.js build command.

Before deploying, add these Vercel Project Environment Variables for Production:

- `DATABASE_URL`: PostgreSQL connection string for the application database
- `SESSION_SECRET`: long random secret, generated with `openssl rand -base64 32`
- `RESEND_API_KEY`: Resend API key for application notifications
- `EMAIL_FROM`: sender address on a verified Resend domain
- `ADMIN_NOTIFICATION_EMAIL`: inbox that receives new application alerts
- `BLOB_READ_WRITE_TOKEN` or Vercel Blob OIDC configuration: private applicant document storage
- `CLAMAV_SCAN_URL`: authenticated internal endpoint that accepts document bytes and returns `{ "clean": true }`
Run the SQL files in `scripts/` against the production database before signing in. Migrations `014` through `016` enable applicant documents, private storage metadata, audit logs, and revocable sessions; migration `019` adds approved-loan withdrawal requests. Configure private Vercel Blob storage before enabling document uploads. Do not commit `.env.local` or production credentials.

For a Neon database, set the environment variables and run `pnpm preflight && pnpm migrate`. Configure the same variables in Vercel Project Settings for deployment. Never paste credentials into source files.

Applicant documents are limited to 10 files and 50 MB total per application, with each file capped at 10 MB. Accepted files are PDF, Word, JPEG, PNG, and WebP. Documents are stored privately and downloaded only after applicant/admin authorization.

Applicants can submit one active bank-transfer or crypto withdrawal request for each approved loan application with a positive eligible amount. Admins review and update request status in the Withdrawals dashboard tab; submitting a request does not itself transfer funds.

Use `scripts/backup-database.sh` and `scripts/restore-database.sh` for backup recovery drills. Complete `UAT_CHECKLIST.md` against staging before enabling production uploads.

Run the SQL files in `scripts/` against the production database before signing in. Do not commit `.env.local` or production credentials.

The site detects the visitor's browser language and sets the document locale, falling back to English. Loan application emails are sent through Resend when the email variables above are configured; the application is still saved if email delivery is unavailable.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.
