import fs from 'node:fs';
import path from 'node:path';

const requiredKeys = [
  'DATABASE_URL',
  'SESSION_SECRET',
  'RESEND_API_KEY',
  'EMAIL_FROM',
  'ADMIN_NOTIFICATION_EMAIL',
  'BLOB_READ_WRITE_TOKEN',
  'CLAMAV_SCAN_URL',
  'NEXT_PUBLIC_SENTRY_DSN',
];

const envFile = path.resolve(process.cwd(), '.env.local');
const hasLocalEnv = fs.existsSync(envFile);
const missingKeys = requiredKeys.filter((key) => !process.env[key]);

if (missingKeys.length && !hasLocalEnv) {
  console.warn('Missing production deployment environment variables:');
  console.warn(missingKeys.join(', '));
  console.warn('Set them in Vercel Project Settings or add them to .env.local before deployment.');
  console.warn('This local preflight is non-blocking so the code can still be built and prepared for deployment.');
  process.exit(0);
}

if (missingKeys.length && hasLocalEnv) {
  console.warn('The local .env.local file is present but still missing required values:');
  console.warn(missingKeys.join(', '));
  console.warn('Review the values before running the production deployment again.');
  process.exit(0);
}

console.log('Preflight checks passed. Required deployment environment variables are present.');
process.exit(0);
