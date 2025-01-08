'use client';

import { useUser } from '@clerk/nextjs';
import { Button, Center, Flex, Loader } from '@mantine/core';
import React, { useCallback, useEffect, useState } from 'react';
import * as DB from '@prisma/client';
import { MyCoursesItem } from './components/MyCoursesItem';
import { findUserCourses } from '@/lib/actions/course';
import { getUserProgressByCourse } from '@/lib/actions/userProgress.actions';
import Link from 'next/link';
import { Routes } from '@/constants/endpoints';

type MyCoursesListProps = {
  lang: string;
};

export type CourseWithProgress = DB.Course & {
  userProgress: DB.UserProgress | null;
};

export const MyCoursesList = ({ lang }: MyCoursesListProps) => {
  const [courses, setCourses] = useState<CourseWithProgress[]>([]);
  const [loading, setLoading] = useState(false);

  const { isLoaded, user } = useUser();

  const fetchCoursesAndProgress = useCallback(async () => {
    setLoading(true);
    try {
      if (user && isLoaded) {
        // @ts-expect-error types
        const userId = +user.publicMetadata.userId;

        // Pobierz kursy użytkownika
        const coursesData = await findUserCourses(userId);
        const courses = coursesData.data ?? [];

        // Pobierz progres dla każdego kursu
        const coursesWithProgress = await Promise.all(
          courses.map(async (course): Promise<CourseWithProgress> => {
            try {
              const { data: progressData } = await getUserProgressByCourse({
                clerkId: user.id,
                courseId: course.id,
              });

              // ZAWSZE zwracamy obiekt - nawet gdy brak progressData
              return {
                ...course,
                userProgress: progressData?.[0] ?? null,
              };
            } catch (e) {
              console.error(
                `Nie udało się pobrać progresu dla kursu ${course.id}`,
                e
              );
              return {
                ...course,
                userProgress: null,
              };
            }
          })
        );

        console.log(coursesWithProgress);
        // Nie potrzebujemy .filter(course => course !== undefined)
        setCourses(coursesWithProgress);
      }
    } catch (e) {
      console.error('Błąd podczas pobierania kursów i progresu:', e);
    } finally {
      setLoading(false);
    }
  }, [user, isLoaded]);

  useEffect(() => {
    if (user && isLoaded) {
      fetchCoursesAndProgress();
    }
  }, [fetchCoursesAndProgress]);

  return (
    <Flex direction={'column'} gap={50} w={'100%'} mt={80}>
      {loading ? (
        <Center w={'100%'}>
          <Loader mt={50} />
        </Center>
      ) : (
        <Center w={'100%'}>
          {courses.length === 0 ? (
            <Button component={Link} href={Routes.offer}>
              Przejdź do oferty
            </Button>
          ) : (
            <Flex direction={'column'} gap={50} w={'100%'}>
              {courses.map(course => (
                <MyCoursesItem
                  key={course.id}
                  lang={lang}
                  course={course}
                  progress={course.userProgress}
                />
              ))}
            </Flex>
          )}
        </Center>
      )}
    </Flex>
  );
};
