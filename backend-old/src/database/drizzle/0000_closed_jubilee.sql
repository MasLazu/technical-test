CREATE TABLE IF NOT EXISTS "products" (
	"productid" serial PRIMARY KEY NOT NULL,
	"productname" text NOT NULL,
	"productdescription" text NOT NULL,
	"productprice" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sales" (
	"salesid" serial PRIMARY KEY NOT NULL,
	"salesdate" date NOT NULL,
	"productid" serial NOT NULL,
	"amount" integer NOT NULL,
	"salespersonid" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Salespersons" (
	"salespersonid" serial PRIMARY KEY NOT NULL,
	"salespersonname" text NOT NULL,
	"salespersonphonenumber" text NOT NULL,
	"salespersonemail" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sales" ADD CONSTRAINT "sales_productid_products_productid_fk" FOREIGN KEY ("productid") REFERENCES "public"."products"("productid") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sales" ADD CONSTRAINT "sales_salespersonid_products_productid_fk" FOREIGN KEY ("salespersonid") REFERENCES "public"."products"("productid") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "productid_idx" ON "sales" USING btree (productid);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "salespersonid_idx" ON "sales" USING btree (salespersonid);