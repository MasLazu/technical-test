import { defineConfig } from 'drizzle-kit';
import { config } from 'dotenv';
config();

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/database/schema.ts',
  out: './src/database/drizzle',
  strict: true,
  dbCredentials: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT) || 5432,
    user: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'postgres',
    database: process.env.DATABASE_NAME || 'interview',
    ssl: process.env.DATABASE_SSL === 'enable' ? true : false,
  },
});
