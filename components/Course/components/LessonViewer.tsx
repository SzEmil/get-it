import React from 'react';
import { Box, Flex, Loader, Text } from '@mantine/core';
import * as DB from '@prisma/client';
import Image from 'next/image';
import { CourseType } from '@/types/types';

type LessonViewerProps = {
  course: CourseType | null;
  activeLessonId: number | null;
};

export const LessonViewer = ({ course, activeLessonId }: LessonViewerProps) => {
  if (!course) {
    return <Loader />;
  }

  // Znalezienie aktywnej lekcji na podstawie unikalnego `id` lekcji
  const activeLesson = course?.lessons?.find(
    lesson => lesson.id === activeLessonId
  );

  if (!activeLesson) {
    return <Text>Brak lekcji do wyświetlenia</Text>;
  }

  return (
    <Box>
      {/* Tytuł lekcji */}
      <h2 style={{ margin: 0, fontSize: '1.8rem', marginBottom: '1rem' }}>
        {activeLesson.title}
      </h2>

      {/* Video lekcji */}
      <Flex mb={20} direction={'column'} justify={'center'}>
        <iframe
          width="700"
          height="400"
          src={activeLesson.videoLink}
          title={activeLesson.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '8px', width: '100%', maxWidth: '700px' }}
        />
      </Flex>

      {/* Opisy i zdjęcia */}
      {activeLesson.about.map((detail, index) => (
        <Box key={index} mt={10} mb={20}>
          <Text style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            {detail.description}
          </Text>
          <Image
            width={700}
            height={400}
            style={{
              width: '100%',
              maxWidth: '500px',
              height: 'auto',
              display: 'block',
              objectFit: 'contain',
              borderRadius: '8px',
              marginTop: '1rem',
            }}
            src={detail.image}
            alt="Lesson Image"
          />
        </Box>
      ))}
    </Box>
  );
};
