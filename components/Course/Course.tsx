'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Burger,
  Grid,
  Container,
  Drawer,
  useMantineTheme,
  GridCol,
  Flex,
  Button,
  Progress,
} from '@mantine/core';
import * as DB from '@prisma/client';
import { LessonNavigation } from './components/LessonNavigation';
import { LessonViewer } from './components/LessonViewer';
import { CourseType } from '@/types/types';
import Link from 'next/link';
import { Routes } from '@/constants/endpoints';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useUser } from '@clerk/nextjs';
import { findUserCourseById } from '@/lib/actions/course';
import {
  getUserProgressByCourse,
  updateLessonStatus,
  UserProgressType,
} from '@/lib/actions/userProgress.actions';

type CourseLayoutProps = {
  courseId: string;
};

export const CourseLayout = ({ courseId }: CourseLayoutProps) => {
  const [opened, setOpened] = useState(false); // For burger menu toggle
  const [activeLessonId, setActiveLessonId] = useState<number | null>(null);
  const theme = useMantineTheme();
  const [course, setCourse] = useState<CourseType | null>(null);
  const [progress, setProgress] = useState<UserProgressType | null>(null);
  const [loading, setLoading] = useState(false);
  const [completionPercentage, setCompletionPercentage] = useState<number>(0);

  const progressRef = useRef<boolean>(false);

  const { isLoaded, user } = useUser();

  const fetchCourseAndProgress = useCallback(async () => {
    setLoading(true);
    try {
      if (user && isLoaded) {
        const userId = user.id;

        // Fetch course data
        const { data } = await findUserCourseById({
          userId,
          courseId: +courseId,
        });
        const courseData = data as CourseType;
        setCourse(courseData);

        // Fetch progress data
        const { data: progressResponse } = await getUserProgressByCourse({
          clerkId: userId,
          courseId: +courseId,
        });
        const progressData = progressResponse as UserProgressType[];
        setProgress(progressData[0]);

        if (courseData?.lessons?.length) {
          console.log(courseData.lessons[0].id);
          setActiveLessonId(courseData.lessons[0].id);

          // a) Czy w "progress" mamy tę lekcję jako ukończoną?
          const isCompleted = progressData[0]?.completedLessons.find(
            completed => Number(completed.lessonId) === Number(courseData.lessons[0].id)
          );
          console.log(isCompleted);
          // b) Jeśli tak, na starcie pasek = 100%, a progressRef = true
          if (isCompleted) {
            if (isCompleted.status === DB.CourseProgressStatus.COMPLETED) {
              setCompletionPercentage(100);
              progressRef.current = true;
            } else {
              // c) W przeciwnym razie zaczynamy od 0%
              setCompletionPercentage(0);
              progressRef.current = false;
            }
          }
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [user, isLoaded, courseId]);

  const handleLessonScrollProgress = useCallback(
    async (scrolledPercentage: number) => {
      // Jeżeli lekcja jest już ukończona (progressRef.current = true),
      // to nie zmieniamy paska i nic nie wysyłamy.
      if (progressRef.current || !activeLessonId || !isLoaded) {
        return;
      }

      // Inaczej uaktualniamy pasek postępu na podstawie scrolla
      setCompletionPercentage(Math.min(100, Math.round(scrolledPercentage)));

      // Po przekroczeniu 100% -> wysyłamy request do bazy, jeśli jeszcze tego nie zrobiliśmy
      if (
        scrolledPercentage >= 100 &&
        activeLessonId &&
        course &&
        user?.id &&
        !progressRef.current
      ) {
        progressRef.current = true; // Zablokuj kolejne requesty w tej lekcji

        try {
          await updateLessonStatus({
            clerkId: user.id,
            courseId: +courseId,
            lessonId: activeLessonId,
            status: DB.CourseProgressStatus.COMPLETED,
          });

          // Aktualizujemy stan 'progress', jeśli chcemy w locie
          setProgress(prev => {
            if (!prev) return prev;
            const updatedLessons = prev.completedLessons.map(lesson =>
              Number(lesson.lessonId) === Number(activeLessonId)
                ? { ...lesson, status: DB.CourseProgressStatus.COMPLETED }
                : lesson
            );
            return {
              ...prev,
              completedLessons: updatedLessons,
            };
          });
        } catch (err) {
          console.error('Failed to update lesson status:', err);
        }
      }
    },
    [activeLessonId, course, courseId, user]
  );

  // 3. Zmiana aktywnej lekcji (w tym ustawienie paska postępu na 0% lub 100% na starcie)
  const handleLessonChange = (lessonId: number) => {
    setActiveLessonId(lessonId);

    // a) Czy w "progress" mamy tę lekcję jako ukończoną?
    const isCompleted = progress?.completedLessons.find(
      completed => Number(completed.lessonId) === Number(lessonId)
    );
    console.log(isCompleted);
    // b) Jeśli tak, na starcie pasek = 100%, a progressRef = true
    if (isCompleted) {
      if (isCompleted.status === DB.CourseProgressStatus.COMPLETED) {
        setCompletionPercentage(100);
        progressRef.current = true;
      } else {
        // c) W przeciwnym razie zaczynamy od 0%
        setCompletionPercentage(0);
        progressRef.current = false;
      }
    }
  };

  useEffect(() => {
    if (user && isLoaded) {
      fetchCourseAndProgress();
    }
  }, [fetchCourseAndProgress]);

  const handlePrevLesson = () => {
    if (course && activeLessonId !== null) {
      const currentIndex = course.lessons.findIndex(
        lesson => lesson.id === activeLessonId
      );
      if (currentIndex > 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveLessonId(course.lessons[currentIndex - 1].id);
      }
    }
  };

  const handleNextLesson = () => {
    if (course && activeLessonId !== null) {
      const currentIndex = course.lessons.findIndex(
        lesson => lesson.id === activeLessonId
      );
      if (currentIndex < course.lessons.length - 1) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveLessonId(course.lessons[currentIndex + 1].id);
      }
    }
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: 'white',
        minHeight: '100vh',
        width: '100%',
        padding: 2,
        borderRadius: '10px',
      }}
    >
      {/* Progress Bar */}
      <Progress value={completionPercentage} size="lg" color="pink" mb="xl" />

      {/* Header with Burger */}
      <Link href={Routes.myCourses}>
        <Flex align={'center'} gap={5}>
          <FaLongArrowAltLeft />
          Powrót do Twoich kursów
        </Flex>
      </Link>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 0',
        }}
      >
        <Burger
          opened={opened}
          onClick={() => setOpened(o => !o)}
          size="sm"
          color="white"
          hiddenFrom="md"
        />
        <h1 style={{ margin: 0 }}>{course?.name ?? 'Loading...'}</h1>
      </div>

      {/* Grid for desktop view */}
      <Grid gutter="md">
        {/* Lesson Navigation (Visible on large screens) */}
        <GridCol span={3} hidden={opened}>
          <LessonNavigation
            course={course}
            activeLessonId={activeLessonId}
            onLessonClick={handleLessonChange}
            progress ={progress}
          />
        </GridCol>

        {/* Lesson Viewer */}
        <Grid.Col span={9}>
          <LessonViewer
            course={course}
            activeLessonId={activeLessonId}
            onScrollProgress={handleLessonScrollProgress}
          />
        </Grid.Col>
      </Grid>

      {/* Drawer for mobile navigation */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="md"
        size="300px"
        title="Nawigacja Lekcji"
        bg={theme.colors.dark[9]}
        zIndex={999999}
      >
        <LessonNavigation
          course={course}
          activeLessonId={activeLessonId}
          onLessonClick={setActiveLessonId}
          progress={progress}
        />
      </Drawer>

      <Flex
        justify="space-between"
        style={{
          marginTop: '2rem',
          padding: '1rem 0',
          borderTop: '1px solid white',
        }}
      >
        <Button
          size="lg"
          radius="xl"
          variant="outline"
          color="pink"
          disabled={!course || activeLessonId === course?.lessons[0]?.id}
          onClick={handlePrevLesson}
        >
          Poprzednia Lekcja
        </Button>
        <Button
          size="lg"
          radius="xl"
          variant="gradient"
          gradient={{ from: '#cf0e81', to: '#ff6ec7' }}
          disabled={
            !course ||
            activeLessonId === course?.lessons[course?.lessons.length - 1]?.id
          }
          onClick={handleNextLesson}
        >
          Następna Lekcja
        </Button>
      </Flex>
    </Container>
  );
};
