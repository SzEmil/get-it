-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "lessons" JSONB NOT NULL DEFAULT '{}';
