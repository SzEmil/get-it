import { Container, Stack, Title, Text, Box, AspectRatio } from '@mantine/core';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { Typography } from '../Typography/Typohraphy';
import styles from './TrailerSection.module.css';

const CourseDemo = () => {
  return (
    <Box
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'black',
        padding: '3rem 0',
      }}
    >
      {/* Background Paint Strokes */}
      <div
        className={`${styles.backgroundPaint} ${styles.backgroundPaint1}`}
      ></div>
      <div
        className={`${styles.backgroundPaint} ${styles.backgroundPaint2}`}
      ></div>

      <Container size="lg" id="courseDemo">
        <Stack gap="xl" align="center">
          <Stack gap={1} align="center">
            <Title ta="center" order={2} mb="sm" style={{ color: 'white' }}>
              Demo kursu
            </Title>
            <Typography ta="center" c="dimmed">
              🎥 Przykładowa lekcja: Zobacz, jak zacząć z Flowise AI! <br />
              Poznaj podstawy, które mogą pomóc w przyszłości stworzyć bota do
              tradingu, kryptowalut i nie tylko.
            </Typography>
          </Stack>

          {/* Video Section */}
          <Box style={{ maxWidth: '800px', width: '100%' }}>
            <VideoPlayer
              width="800px"
              videoSrc={
                'https://drive.google.com/file/d/1SLEgnp7Fm5FPOplX6LWDwYrF7hASr0jg/preview'
              }
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default CourseDemo;
