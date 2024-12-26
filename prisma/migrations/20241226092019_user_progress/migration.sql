-- CreateEnum
CREATE TYPE "CourseProgressStatus" AS ENUM ('IN_PROGRESS', 'COMPLETED');

-- CreateTable
CREATE TABLE "UserProgress" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,
    "completedLessons" JSONB NOT NULL DEFAULT '[]',
    "status" TEXT NOT NULL DEFAULT 'in_progress',
    "additionalData" JSONB,

    CONSTRAINT "UserProgress_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserProgress" ADD CONSTRAINT "UserProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
