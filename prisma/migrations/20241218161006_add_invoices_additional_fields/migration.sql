/*
  Warnings:

  - You are about to drop the column `buyer_city` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `seller_email` on the `Invoice` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Invoice` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `DoublePrecision`.
  - You are about to alter the column `exchange_rate` on the `Invoice` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `DoublePrecision`.
  - Added the required column `buyer_country` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `buyer_town` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Made the column `seller_NIP` on table `Invoice` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "buyer_city",
DROP COLUMN "seller_email",
ADD COLUMN     "buyer_country" TEXT NOT NULL,
ADD COLUMN     "buyer_town" TEXT NOT NULL,
ADD COLUMN     "seller_REGON" TEXT NOT NULL DEFAULT '527787213',
ALTER COLUMN "seller_name" SET DEFAULT 'Karol Sapiołko Narevka',
ALTER COLUMN "seller_address" SET DEFAULT 'Hajnowska 1 A ',
ALTER COLUMN "seller_NIP" SET NOT NULL,
ALTER COLUMN "seller_NIP" SET DEFAULT '6030083353',
ALTER COLUMN "seller_phone" SET DEFAULT '887600255',
ALTER COLUMN "seller_postalCode" SET DEFAULT '17-220',
ALTER COLUMN "seller_postalCode" SET DATA TYPE TEXT,
ALTER COLUMN "seller_town" SET DEFAULT 'Narewka',
ALTER COLUMN "seller_town" SET DATA TYPE TEXT,
ALTER COLUMN "seller_country" SET DEFAULT 'Polska',
ALTER COLUMN "bank_name" SET DEFAULT 'mbank',
ALTER COLUMN "bank_account" SET DEFAULT '661140 2004 0000 3502 7459 8267',
ALTER COLUMN "buyer_NIP" SET DATA TYPE TEXT,
ALTER COLUMN "buyer_postalCode" SET DATA TYPE TEXT,
ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "currency" SET DATA TYPE TEXT,
ALTER COLUMN "payment_name" SET DATA TYPE TEXT,
ALTER COLUMN "exchange_rate" SET DATA TYPE DOUBLE PRECISION;
