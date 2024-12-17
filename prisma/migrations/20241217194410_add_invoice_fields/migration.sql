-- CreateEnum
CREATE TYPE "InvoiceType" AS ENUM ('PERSONAL', 'COMPANY');

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "invoice_address" TEXT,
ADD COLUMN     "invoice_country" TEXT,
ADD COLUMN     "invoice_name" TEXT,
ADD COLUMN     "invoice_nip" TEXT,
ADD COLUMN     "invoice_postal_code" TEXT,
ADD COLUMN     "invoice_town" TEXT,
ADD COLUMN     "invoice_type" "InvoiceType" NOT NULL DEFAULT 'PERSONAL';
