import React from 'react';

type VideoPlayerProps = {
  videoSrc: string;
  width?: string;
  height?: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoSrc,
  width = '700px',
  height = 'auto',
}) => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}
    >
      <div
        style={{
          width: '700px',
          height: height,
          aspectRatio: '16/9',
          position: 'relative',
        }}
      >
        <iframe
          src={videoSrc}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '8px',
          }}
          allow="autoplay; fullscreen"
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

// export default VideoPlayer;
// import React from 'react';
// import ReactPlayer from 'react-player';

// type VideoPlayerProps = {
//   videoSrc: string;
//   width?: string;
//   height?: string;
// };

// const VideoPlayer: React.FC<VideoPlayerProps> = ({
//   videoSrc,
//   width = '100%',
//   height = '100%',
// }) => {
//   return (
//     <div style={{ maxWidth: width, height }}>
//       <ReactPlayer
//         url={videoSrc}
//         controls={true} // Enable player controls
//         width="100%"
//         height="100%"
//       />
//     </div>
//   );
// };

 export default VideoPlayer;
