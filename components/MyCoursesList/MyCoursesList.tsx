'use client';

import { useUser } from '@clerk/nextjs';
import { Center, Flex, Loader } from '@mantine/core';
import React, { useCallback, useEffect, useState } from 'react';
import * as DB from '@prisma/client';
import { MyCoursesItem } from './components/MyCoursesItem';
import { findUserCourses } from '@/lib/actions/course';

type MyCoursesListPropss = {
  lang: string;
};

export const MyCoursesList = ({ lang }: MyCoursesListPropss) => {
  const [courses, setCourses] = useState<DB.Course[]>([]);
  const [loading, setLoading] = useState(false);

  const { isLoaded, user } = useUser();

  const fetchCourses = useCallback(async () => {
    setLoading(true);
    try {
      if (user && isLoaded) {
        const coursesData = await findUserCourses(+user.id);
        setCourses(coursesData.data ?? []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [user, isLoaded]);

  useEffect(() => {
    if (user && isLoaded) {
      fetchCourses();
    }
  }, [fetchCourses]);

  return (
    <Flex direction={'column'} gap={50} w={'100%'} mt={80}>
      {loading ? (
        <Center w={'100%'}>
          <Loader mt={50} />
        </Center>
      ) : (
        <Center w={'100%'}>
          <Flex direction={'column'} gap={50} w={'100%'}>
            {courses.map(course => (
              <MyCoursesItem key={course.id} lang={lang} course={course} />
            ))}
          </Flex>
        </Center>
      )}
    </Flex>
  );
};
