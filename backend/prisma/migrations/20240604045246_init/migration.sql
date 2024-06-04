-- CreateTable
CREATE TABLE "Salesperson" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Salesperson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sale" (
    "id" SERIAL NOT NULL,
    "salesDate" TIMESTAMP(3) NOT NULL,
    "productId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "salespersonId" INTEGER NOT NULL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "productid_idx" ON "Sale"("productId");

-- CreateIndex
CREATE INDEX "salespersonid_idx" ON "Sale"("salespersonId");

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_salespersonId_fkey" FOREIGN KEY ("salespersonId") REFERENCES "Salesperson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
