import {
  serial,
  text,
  index,
  pgTable,
  date,
  integer,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const salesperson = pgTable('Salespersons', {
  id: serial('salespersonid').primaryKey(),
  name: text('salespersonname').notNull(),
  phoneNumber: text('salespersonphonenumber').notNull(),
  email: text('salespersonemail').notNull(),
});

export const salespersonRelations = relations(salesperson, ({ many }) => ({
  sales: many(sale),
}));

export const product = pgTable('products', {
  id: serial('productid').primaryKey(),
  name: text('productname').notNull(),
  description: text('productdescription').notNull(),
  price: integer('productprice').notNull(),
});

export const productRelations = relations(salesperson, ({ many }) => ({
  sales: many(sale),
}));

export const sale = pgTable(
  'sales',
  {
    id: serial('salesid').primaryKey(),
    salesDate: date('salesdate').notNull(),
    productId: serial('productid')
      .notNull()
      .references(() => product.id),
    amount: integer('amount').notNull(),
    salespersonId: serial('salespersonid')
      .notNull()
      .references(() => product.id),
  },
  (table) => {
    return {
      productIdx: index('productid_idx').on(table.productId),
      salespersonIdx: index('salespersonid_idx').on(table.salespersonId),
    };
  },
);

export const saleRelations = relations(sale, ({ one }) => ({
  salesperson: one(salesperson, {
    fields: [sale.salespersonId],
    references: [salesperson.id],
  }),
  product: one(product, {
    fields: [sale.productId],
    references: [product.id],
  }),
}));
