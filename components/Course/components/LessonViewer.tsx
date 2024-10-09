'use client';
import React from 'react';
import { Box, Center, Flex, Loader, Text } from '@mantine/core';
import * as DB from '@prisma/client';
import Image from 'next/image';
import { CourseType } from '@/types/types';
import { CourseImage } from '@/components/CourseImage/CourseImage';
import { isArray } from 'lodash';
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
import ProtectedVideoPlayer from '@/components/VideoPlayer/ProtectedVideoPlayer';
import styles from './LessonViewer.module.css';

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
        <Center>
          <ProtectedVideoPlayer 
            videoId={activeLesson.videoLink}
            courseId={course.id.toString()}      
          />
        </Center>
      </Flex>

      {/* Opisy i zdjęcia */}
      {activeLesson.about.map((detail, index) => (
        <Box key={index} mt={10} mb={20}>
          {detail.title && (
            <Text style={{ fontSize: '1.6rem', lineHeight: '1.8' }}>
              {detail.title}
            </Text>
          )}

          {/* Renderowanie HTML z klasą dla stylów */}
          {detail.description && isArray(detail.description) ? (
            <Box component="ul" className={styles.descriptionContainer}>
              {detail.description.map((item, index) => (
                <Box key={index} component="li">
                  <div
                    className={styles.descriptionContainer}
                    dangerouslySetInnerHTML={{ __html: item }} // Renderowanie HTML dla każdego elementu tablicy
                  />
                </Box>
              ))}
            </Box>
          ) : (
            <div
              className={styles.descriptionContainer}
              dangerouslySetInnerHTML={{ __html: detail.description }} // Renderowanie HTML
            />
          )}

          {detail.image && (
            <Center>
              <CourseImage
                width={800}
                height={400}
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  marginTop: '1rem',
                }}
                courseId={course.id.toString()}
                imageName={detail.image}
                alt="Lesson Image"
              />
            </Center>
          )}
        </Box>
      ))}
    </Box>
  );
};