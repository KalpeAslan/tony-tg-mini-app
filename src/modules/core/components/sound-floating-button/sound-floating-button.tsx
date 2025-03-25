'use client';
import { useBoolean } from 'usehooks-ts';
import { Button, Icon } from '@/components';
import { useState, useEffect, useRef } from 'react';

export const SoundFloatingButton = () => {
  const { value: isExpanded, toggle, setTrue: expand, setFalse: collapse } = useBoolean(false);
  const { value: isPlaying, setTrue: play, setFalse: pause } = useBoolean(false);

  const audioTracks = [
    { url: "/music/Tony's Home.mp3" },
    { url: '/music/Ton Tony.mp3' },
    { url: '/music/TapTapTap.mp3' },
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio(audioTracks[currentTrackIndex].url);
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Handle track changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = new Audio(audioTracks[currentTrackIndex].url);
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrackIndex]);

  // Handle play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % audioTracks.length;
    setCurrentTrackIndex(nextIndex);
  };

  const renderPlayButton = () => (
    <Button onClick={play} className="rounded-full p-4" size="sm" variant="green" aria-label="Play">
      <Icon color="white" name="sound-on" />
    </Button>
  );

  const renderPauseButton = () => (
    <Button
      onClick={pause}
      className="rounded-full p-4"
      size="sm"
      variant="orange"
      aria-label="Pause"
    >
      <Icon color="white" name="sound-off" />
    </Button>
  );

  const renderNextButton = () => (
    <Button
      onClick={handleNextTrack}
      className="rounded-full p-4"
      size="sm"
      variant="primary"
      aria-label="Next"
    >
      <Icon name="next" color="white" />
    </Button>
  );

  const closeButton = (
    <Button
      onClick={toggle}
      className="rounded-full p-4"
      size="sm"
      variant="primary"
      aria-label="Close"
    >
      <Icon name="close" color="white" />
    </Button>
  );

  const renderExpandButton = () => (
    <Button
      onClick={expand}
      className="rounded-full p-4"
      size="sm"
      variant="primary"
      aria-label="Sound Controls"
    >
      <Icon color="white" name={isPlaying ? 'sound-off' : 'sound-on'} />
    </Button>
  );

  return (
    <div className="fixed top-5 right-5 flex flex-col gap-2 z-50">
      {isExpanded ? (
        <div className="flex flex-col-reverse gap-2 animate-fade-in">
          {isPlaying ? renderPauseButton() : renderPlayButton()}
          {renderNextButton()}
          {closeButton}
        </div>
      ) : (
        renderExpandButton()
      )}
    </div>
  );
};
