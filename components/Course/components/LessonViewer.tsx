'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Box, Center, Flex, Loader, Stack, Text, Title } from '@mantine/core';
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
  onScrollProgress: (scrolledPercentage: number) => Promise<void>;
  scrollToTop: boolean;
};

export const LessonViewer = ({
  course,
  activeLessonId,
  onScrollProgress,
  scrollToTop,
}: LessonViewerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const activeLesson = course?.lessons?.find(
    lesson => lesson.id === activeLessonId
  );

  const [maxScroll, setMaxScroll] = useState(0);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const currentScroll = (scrollTop / (scrollHeight - clientHeight)) * 100;

    if (currentScroll > maxScroll) {
      setMaxScroll(currentScroll);
      onScrollProgress(currentScroll);
    }
  }, [maxScroll, onScrollProgress]);

  useEffect(() => {
    console.log('aktywacja use efekta');
    if (scrollToTop && containerRef.current) {
      console.log('zmiana pozycji');
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [scrollToTop]);

  if (!course) {
    return <Loader />;
  }

  if (!activeLesson) {
    return <Text>Brak lekcji do wyświetlenia</Text>;
  }

  return (
    <Box
      ref={containerRef}
      onScroll={handleScroll}
      style={{
        maxHeight: '80vh', // Przykładowa wysokość; dostosuj do potrzeb
        overflowY: 'auto',
        paddingRight: '1rem',
      }}
    >
      {/* Tytuł lekcji */}
      <h2 style={{ margin: 0, fontSize: '1.8rem', marginBottom: '1rem' }}>
        {activeLesson.title}
      </h2>

      {/* Video lekcji */}
      <Stack gap={2} display={'flex'}>
        {activeLesson.videoLink.map(video => (
          <Flex
            key={video.link}
            mb={20}
            direction={'column'}
            justify={'center'}
          >
            <Center>
              <Stack>
                <Title mb={2} order={4}>
                  {video.name}
                </Title>
                <ProtectedVideoPlayer
                  videoId={video.link}
                  courseId={course.id.toString()}
                />
              </Stack>
            </Center>
          </Flex>
        ))}
      </Stack>

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
            <Box
              component="ul"
              className={styles.descriptionContainer}
              style={{ color: 'white' }}
            >
              {detail.description.map((item, index) => (
                <Box key={index} component="li">
                  <div
                    className={styles.descriptionContainer}
                    style={{ color: 'white' }}
                    dangerouslySetInnerHTML={{ __html: item }}
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
