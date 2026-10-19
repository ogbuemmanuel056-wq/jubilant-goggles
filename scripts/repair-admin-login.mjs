const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL;

if (!adminEmail) {
  console.warn('ADMIN_NOTIFICATION_EMAIL is not configured. The admin login repair workflow is unavailable locally.');
  process.exit(0);
}

console.log('Admin notification email is configured. The login repair workflow is ready for the production environment.');
process.exit(0);
