import { Container, Stack, Title, Text, Box, AspectRatio } from '@mantine/core';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { Typography } from '../Typography/Typohraphy';

export const CourseDemo = () => {
  return (
    <Container id="courseDemo" size="lg" my="100px">
      <Stack gap="xl" align="center">
        {/* Nagłówek */}
        <Stack gap="xs" align="center">
          <Title ta="center" order={2} mb="sm" style={{ color: 'white' }}>
            Demo kursu
          </Title>
          <Typography ta="center" c="dimmed">
            🎥 Przykładowa lekcja: Zobacz, jak wygląda nauka z nami! <br />
            Obejrzyj wybrany fragment kursu, by samodzielnie ocenić jakość
            materiałów.
          </Typography>
        </Stack>

        {/* Video Player */}
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
  );
};
