import { PgInsertValue, PgTableWithColumns } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/postgres-js';
import { sql } from 'drizzle-orm';
import postgres from 'postgres';
import { db } from 'src/database/db';

export class Service<T extends PgTableWithColumns<any>> {
  table: T;

  constructor(table: T) {
    this.table = table;
  }

  async findAll() {
    return await db.select(this.table).from(this.table);
  }

  async findPaginate(limit: number, offset: number) {
    return await db
      .select(this.table)
      .from(this.table)
      .limit(limit)
      .offset(offset);
  }

  async findOne(id: number) {
    return await db
      .select(this.table)
      .from(this.table)
      .where(sql`${this.table.id} = ${id}`)
      .limit(1);
  }

  async create(data: PgInsertValue<T>) {
    return await db.insert(this.table).values(data);
  }

  async update(id: number, data: PgInsertValue<T>) {
    return await db
      .update(this.table)
      .set(data)
      .where(sql`${this.table.id} = ${id}`);
  }

  async delete(id: number) {
    return await db
      .delete(this.table)
      .where(sql`${this.table.id} = ${id}`);
  }

  async deleteAll() {
    return await db.delete(this.table);
  }
}
