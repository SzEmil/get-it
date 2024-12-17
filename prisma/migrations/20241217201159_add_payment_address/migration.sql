/*
  Warnings:

  - You are about to drop the column `flatNumber` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `houseNumber` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `street` on the `Payment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "flatNumber",
DROP COLUMN "houseNumber",
DROP COLUMN "street",
ADD COLUMN     "address" TEXT NOT NULL DEFAULT '';
