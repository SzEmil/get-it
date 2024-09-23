'use client';
import React, { useEffect, useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import VideoPlayer from './VideoPlayer';

type ProtectedVideoPlayerProps = {
  courseId: string;
  videoId: string;
};

const ProtectedVideoPlayer: React.FC<ProtectedVideoPlayerProps> = ({
  courseId,
  videoId,
}) => {
  const { userId } = useAuth(); // Clerk user authentication
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      if (!userId) {
        setError('Unauthorized');
        return;
      }

      try {
        // Pobieranie linku do wideo z API
        const response = await fetch(`/api/videos/${courseId}/${videoId}`);
        const data = await response.json();

        if (response.ok) {
          setVideoUrl(data.videoUrl); // Ustawiamy URL wideo z Google Drive
        } else {
          setError(data.error || 'Unauthorized access');
        }
      } catch (err) {
        console.log(err);
        setError('Error fetching video');
      }
    };

    fetchVideoUrl();
  }, [courseId, videoId, userId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!videoUrl) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <VideoPlayer videoSrc={videoUrl} />
    </div>
  );
};

export default ProtectedVideoPlayer;
