'use client';
import React from 'react';
import { ScrollArea, Button } from '@mantine/core';
import * as DB from '@prisma/client';
import { CourseType } from '@/types/types';
import { UserProgressType } from '@/lib/actions/userProgress.actions';

type LessonNavigationProps = {
  course: CourseType | null;
  activeLessonId: number | null;
  onLessonClick: (lessonId: number) => void;
  progress: UserProgressType | null;
};

export const LessonNavigation = ({
  course,
  activeLessonId,
  onLessonClick,
  progress
}: LessonNavigationProps) => {
  return (
    <ScrollArea style={{ height: '100%' }}>
    <div>
      {course?.lessons?.map((lesson) => {
        // Sprawdzamy, czy lekcja ma status COMPLETED
        const isCompleted = progress?.completedLessons.some(
          (completedLesson) =>
            completedLesson.lessonId === lesson.id &&
            completedLesson.status === DB.CourseProgressStatus.COMPLETED
        );
        const variant = lesson.id === activeLessonId ? 'filled' : 'outline';
        const color =
          lesson.id === activeLessonId
            ? 'themePrimary.0'
            : isCompleted
            ? 'themePrimary.4'
            : 'gray';

        return (
          <Button
            key={lesson.id}
            onClick={() => onLessonClick(lesson.id)}
            fullWidth
            variant={variant}
            color={color}
            style={{ marginBottom: '10px', textOverflow: 'ellipsis' }}
            w={300}
          >
            {lesson.title}
          </Button>
        );
      })}
    </div>
  </ScrollArea>
  );
};
