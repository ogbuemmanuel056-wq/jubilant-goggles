const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.warn('DATABASE_URL is not configured. Skipping migration execution locally.');
  process.exit(0);
}

console.log('DATABASE_URL detected. Production migration setup is ready to run against the configured database.');
console.log('Apply the SQL migration files in the scripts folder before enabling production access.');
process.exit(0);
