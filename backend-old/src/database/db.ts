import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './schema';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: 'postgres://postgres:postgres@localhost:5432/interview',
});

export const db = drizzle(pool);

migrate(db, { migrationsFolder: './src/database/schema.ts' })
  .then(() => {
    console.log('Migrations complete!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Migrations failed!', err);
    process.exit(1);
  });
