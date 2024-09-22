import React from 'react';
import { Box } from '@mantine/core';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  videoLink: string;
  title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoLink, title }) => {
  // Function to disable right-click context menu
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <Box style={{ position: 'relative', width: '100%', maxWidth: '700px' }}>
        <div onContextMenu={handleContextMenu}>
          <ReactPlayer
            url={videoLink}
            controls={true}
            width="700px"
            height="400px"
            style={{
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
            config={{
              youtube: {
                playerVars: { showinfo: 0, modestbranding: 1 },
              },
            }}
            title={title}
          />
        </div>
      </Box>
    </div>
  );
};

export default VideoPlayer;
