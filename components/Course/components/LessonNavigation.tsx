'use client';
import React from 'react';
import { ScrollArea, Button } from '@mantine/core';
import * as DB from '@prisma/client';
import { CourseType } from '@/types/types';

type LessonNavigationProps = {
  course: CourseType | null;
  activeLessonId: number | null;
  onLessonClick: (lessonId: number) => void;
};

export const LessonNavigation = ({
  course,
  activeLessonId,
  onLessonClick,
}: LessonNavigationProps) => {
  return (
    <ScrollArea style={{ height: '100%' }}>
      <div>
        {course?.lessons?.map(lesson => (
          <Button
            key={lesson.id}
            onClick={() => onLessonClick(lesson.id)}
            fullWidth
            variant={lesson.id === activeLessonId ? 'filled' : 'outline'}
            color={lesson.id === activeLessonId ? 'themePrimary.0' : 'gray'}
            style={{ marginBottom: '10px', textOverflow: 'ellipsis' }}
            w={300}
          >
            {lesson.title}
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
};
