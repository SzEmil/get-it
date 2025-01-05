import { Container, Stack, Title, Text, Box, AspectRatio } from '@mantine/core';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { Typography } from '../Typography/Typohraphy';

export const CourseDemo = () => {
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
      {/* <div
        className={`${styles.backgroundPaint} ${styles.backgroundPaint1}`}
      ></div>
      <div
        className={`${styles.backgroundPaint} ${styles.backgroundPaint2}`}
      ></div> */}

      <Container size="lg">
        <Stack gap="xl" align="center">
          <Stack gap={1} align="center">
            <Title ta="center" order={2} mb="sm" style={{ color: 'white' }}>
              Demo kursu
            </Title>
            <Typography ta="center" c="dimmed">
              🎥 Przykładowa lekcja: Zobacz, jak wygląda nauka z nami! <br />
              Obejrzyj wybrany fragment kursu, by samodzielnie ocenić jakość
              materiałów.
            </Typography>
          </Stack>

          {/* Video Section */}
          <Box style={{ maxWidth: '800px', width: '100%' }}>
            <VideoPlayer
              width="800px"
              videoSrc={
                'https://drive.google.com/file/d/16YRYhURFzjwIOBOOO9m7oP75JlipDoG8/preview'
              }
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
