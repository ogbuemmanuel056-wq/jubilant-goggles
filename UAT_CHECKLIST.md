# User Acceptance Testing Checklist

Run this against a staging deployment with test data and a test Blob store. Do not use real applicant documents.

## Applicant

- [ ] Submit an application and sign in with email and application number.
- [ ] Upload one valid PDF, image, and Word document in each required category.
- [ ] Confirm an upload is rejected when malware scanning is unavailable.
- [ ] Confirm invalid signatures, oversized files, unsupported types, and quota limits are rejected.
- [ ] Confirm the applicant can download only their own documents.
- [ ] Confirm rejected documents show notes and can be replaced or deleted.
- [ ] Confirm review status and notes appear after refresh and email delivery.

## Admin

- [ ] Confirm unauthenticated users cannot access the admin dashboard or document APIs.
- [ ] Download a clean applicant document and verify the filename and content.
- [ ] Approve and reject documents with notes.
- [ ] Confirm the applicant receives the review notification.
- [ ] Confirm document view, download, upload, replacement, deletion, and review events are audited.
- [ ] Confirm logout revokes the session and previously issued cookies no longer work.

## Recovery

- [ ] Create a database backup with `scripts/backup-database.sh`.
- [ ] Restore it into a disposable database with `scripts/restore-database.sh`.
- [ ] Verify applications, document metadata, audit records, and session records after restore.