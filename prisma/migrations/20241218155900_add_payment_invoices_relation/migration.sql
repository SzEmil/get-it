-- CreateTable
CREATE TABLE "Invoice" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "invoice_number" TEXT NOT NULL,
    "seller_name" TEXT NOT NULL,
    "seller_address" TEXT NOT NULL,
    "seller_NIP" TEXT,
    "seller_code" TEXT NOT NULL DEFAULT '+48',
    "seller_phone" TEXT NOT NULL,
    "seller_email" TEXT NOT NULL,
    "seller_postalCode" VARCHAR(20) NOT NULL,
    "seller_town" VARCHAR(100) NOT NULL,
    "seller_country" TEXT NOT NULL,
    "bank_name" TEXT,
    "bank_account" TEXT,
    "bank_swift" TEXT,
    "buyer_name" TEXT NOT NULL,
    "buyer_address" TEXT NOT NULL,
    "buyer_NIP" VARCHAR(20) NOT NULL,
    "buyer_postalCode" VARCHAR(20) NOT NULL,
    "buyer_city" VARCHAR(100) NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "payment_date" TIMESTAMP(3) NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "currency" VARCHAR(10) NOT NULL,
    "payment_name" VARCHAR(255) NOT NULL,
    "sold_date" TIMESTAMP(3) NOT NULL,
    "exchange_rate" DECIMAL(10,4),
    "exchange_rate_date" TIMESTAMP(3),
    "type" "InvoiceType" NOT NULL,
    "paymentId" INTEGER NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_paymentId_key" ON "Invoice"("paymentId");

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
