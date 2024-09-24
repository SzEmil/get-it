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

  // useEffect(() => {
  //   const fetchVideoUrl = async () => {
  //     if (!userId) {
  //       setError('Unauthorized');
  //       return;
  //     }

  //     try {
  //       // Pobieranie linku do wideo z API
  //       const response = await fetch(`/api/videos/${courseId}/${videoId}`);
  //       const data = await response.json();

  //       if (response.ok) {
  //         setVideoUrl(data.videoUrl); // Ustawiamy URL wideo z Google Drive
  //       } else {
  //         setError(data.error || 'Unauthorized access');
  //       }
  //     } catch (err) {
  //       console.log(err);
  //       setError('Error fetching video');
  //     }
  //   };

  //   fetchVideoUrl();
  // }, [courseId, videoId, userId]);

  useEffect(() => {
    const fetchVideo = async () => {
      if (!userId) {
        setError('Unauthorized');
        return;
      }

      try {
        // Pobieranie wideo z API
        const response = await fetch(`/api/videos/${courseId}/${videoId}`);

        if (!response.ok) {
          const data = await response.json(); // Próba parsowania błędu jako JSON
          setError(data.error || 'Unauthorized access');
          return;
        }

        // Zamiast parsowania jako JSON, pobieramy dane binarne w formie Blob
        const blob = await response.blob();

        // Tworzenie URL dla <video>
        const videoObjectUrl = URL.createObjectURL(blob);

        // Ustawienie URL wideo w stanie
        setVideoUrl(videoObjectUrl);
      } catch (err) {
        console.log(err);
        setError('Error fetching video');
      }
    };

    fetchVideo();
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
