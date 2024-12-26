/*
  Warnings:

  - The `status` column on the `UserProgress` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "UserProgress" DROP COLUMN "status",
ADD COLUMN     "status" "CourseProgressStatus" NOT NULL DEFAULT 'IN_PROGRESS';
