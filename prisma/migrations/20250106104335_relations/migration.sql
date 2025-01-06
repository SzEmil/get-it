/*
  Warnings:

  - Added the required column `paymentId` to the `UsedCoupon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UsedCoupon" ADD COLUMN     "paymentId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "UsedCoupon" ADD CONSTRAINT "UsedCoupon_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
