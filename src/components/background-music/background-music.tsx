import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const musicFiles = ["/music/Tony's Home.mp3", '/music/Ton Tony.mp3', '/music/TapTapTap.mp3'];

export const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30%
    }
  }, []);

  const handleTrackEnd = () => {
    setCurrentTrackIndex(prevIndex => (prevIndex + 1) % musicFiles.length);
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={musicFiles[currentTrackIndex]}
        loop={false}
        onEnded={handleTrackEnd}
        className="hidden"
      />
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-20 right-4 z-50 bg-white/10 backdrop-blur-md rounded-full p-3 shadow-lg"
        onClick={togglePlay}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
      </motion.button>
    </>
  );
};
