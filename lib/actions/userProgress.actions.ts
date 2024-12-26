'use server';

import prisma from '../../prisma/client';
import * as DB from '@prisma/client';
import { FormatResponse } from './response';

export type UserProgressLesson = {
  lessonId: number;
  lessonTitle: string;
  status: DB.CourseProgressStatus;
};

export type UserProgressType = {
  completedLessons: UserProgressLesson[];
} & Omit<DB.UserProgress, 'completedLessons'>;

export const createUserProgressFromPayment = FormatResponse(
  async (paymentId: number) => {
    // Znalezienie płatności na podstawie ID
    const payment = await prisma.payment.findUnique({
      where: { id: paymentId },
      include: {
        courses: true, // Pobranie powiązanych kursów (OrderCourse)
      },
    });

    if (!payment) {
      throw new Error(`Płatność o ID ${paymentId} nie została znaleziona.`);
    }

    const userId = payment.userId;

    // Iteracja przez kursy powiązane z płatnością
    const progressPromises = payment.courses.map(async orderCourse => {
      const course = await prisma.course.findUnique({
        where: { id: orderCourse.courseId },
      });

      if (!course) {
        throw new Error(
          `Kurs o ID ${orderCourse.courseId} nie został znaleziony.`
        );
      }

      // Mapowanie tablicy lessons z kursu
      const lessons = Array.isArray(course.lessons)
        ? course.lessons.map((lesson: any) => ({
            lessonId: lesson.id,
            lessonTitle: lesson.title,
            status: DB.CourseProgressStatus.IN_PROGRESS, // Status początkowy
          }))
        : [];

      // Tworzenie obiektu UserProgress
      const progress = await prisma.userProgress.create({
        data: {
          userId,
          courseId: orderCourse.courseId,
          completedLessons: lessons,
          status: DB.CourseProgressStatus.NOT_STARTED,
        },
      });

      return progress;
    });

    // Czekanie na utworzenie wszystkich progresów
    const userProgresses = await Promise.all(progressPromises);

    return userProgresses;
  }
);

export const getUserProgressByCourse = FormatResponse(
  async ({ clerkId, courseId }: { clerkId: string; courseId?: number }) => {
    // Znalezienie użytkownika na podstawie clerkId
    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      throw new Error(`Użytkownik o clerkId ${clerkId} nie został znaleziony.`);
    }

    // Pobranie postępów użytkownika
    const userProgress = await prisma.userProgress.findMany({
      where: {
        userId: user.id,
        ...(courseId && { courseId }), // Jeśli podano courseId, dodaj warunek
      },
    });

    if (!userProgress || userProgress.length === 0) {
      throw new Error(
        courseId
          ? `Postęp użytkownika dla kursu o ID ${courseId} nie został znaleziony.`
          : `Brak zapisanych postępów dla użytkownika o clerkId ${clerkId}.`
      );
    }

    return userProgress as UserProgressType[];
  }
);

export const updateLessonStatus = FormatResponse(
  async ({
    clerkId,
    courseId,
    lessonId,
    status,
  }: {
    clerkId: string;
    courseId: number;
    lessonId: number;
    status: DB.CourseProgressStatus;
  }) => {
    // Znalezienie użytkownika na podstawie clerkId
    const user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      throw new Error(`Użytkownik o clerkId ${clerkId} nie został znaleziony.`);
    }

    // Pobranie postępu użytkownika dla wskazanego kursu
    const userProgress = await prisma.userProgress.findFirst({
      where: {
        userId: user.id,
        courseId,
      },
    });

    if (!userProgress) {
      throw new Error(
        `Postęp użytkownika dla kursu o ID ${courseId} nie został znaleziony.`
      );
    }

    // Aktualizacja statusu lekcji
    const updatedLessons = Array.isArray(userProgress.completedLessons)
      ? userProgress.completedLessons.map((lesson: any) => {
          if (lesson.lessonId === lessonId) {
            return {
              ...lesson,
              status,
            };
          }
          return lesson;
        })
      : [];

    if (!updatedLessons.some((lesson: any) => lesson.lessonId === lessonId)) {
      throw new Error(
        `Lekcja o ID ${lessonId} nie została znaleziona w postępie użytkownika.`
      );
    }

    // Aktualizacja w bazie danych
    const updatedProgress = await prisma.userProgress.update({
      where: {
        id: userProgress.id,
      },
      data: {
        completedLessons: updatedLessons,
        updatedAt: new Date(), // Aktualizacja znacznika czasu
      },
    });

    return updatedProgress;
  }
);
