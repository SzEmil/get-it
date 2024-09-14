'use client';

import React, { useCallback, useEffect, useState } from 'react';
import {
  Burger,
  Grid,
  Container,
  Drawer,
  useMantineTheme,
  GridCol,
  Flex,
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

type CourseLayoutProps = {
  courseId: string;
};

export const CourseLayout = ({ courseId }: CourseLayoutProps) => {
  const [opened, setOpened] = useState(false); // For burger menu toggle
  const [activeLessonId, setActiveLessonId] = useState<number | null>(null);
  const theme = useMantineTheme();
  const [course, setCourse] = useState<CourseType | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLessonClick = (lessonId: number) => {
    setActiveLessonId(lessonId);
    setOpened(false);
  };

  const { isLoaded, user } = useUser();

  const fetchCourse = useCallback(async () => {
    setLoading(true);
    try {
      if (user && isLoaded) {
        console.log(user.id);
        const { data } = await findUserCourseById({
          userId: user.id,
          courseId: +courseId,
        });
        const courseData = data as CourseType;
        setCourse(courseData ?? null);
        if (course) {
          setActiveLessonId(course?.lessons[0].id);
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [user, isLoaded]);

  useEffect(() => {
    if (user && isLoaded) {
      fetchCourse();
    }
  }, [fetchCourse]);

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
            onLessonClick={handleLessonClick}
          />
        </GridCol>

        {/* Lesson Viewer */}
        <Grid.Col span={9}>
          <LessonViewer course={course} activeLessonId={activeLessonId} />
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
          onLessonClick={handleLessonClick}
        />
      </Drawer>
    </Container>
  );
};
