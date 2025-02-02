-- CreateEnum
CREATE TYPE "InviceVariant" AS ENUM ('VAT', 'REGULAR');

-- AlterTable
ALTER TABLE "Invoice" ADD COLUMN     "tax" INTEGER NOT NULL DEFAULT 23,
ADD COLUMN     "variant" "InviceVariant" NOT NULL DEFAULT 'REGULAR';
