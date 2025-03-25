import { useEffect, useRef, useState } from 'react';

const musicFiles = ["/music/Tony's Home.mp3", '/music/Ton Tony.mp3', '/music/TapTapTap.mp3'];

export const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30%
    }
  }, []);

  const handleTrackEnd = () => {
    setCurrentTrackIndex(prevIndex => (prevIndex + 1) % musicFiles.length);
  };

  return (
    <audio
      ref={audioRef}
      src={musicFiles[currentTrackIndex]}
      loop={false}
      onEnded={handleTrackEnd}
      autoPlay
      className="hidden"
    />
  );
};
