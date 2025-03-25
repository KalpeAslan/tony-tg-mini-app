'use client';
import { useBoolean } from 'usehooks-ts';
import { Button, Icon } from '@/components';
import { useState, useEffect, useRef } from 'react';

export const SoundFloatingButton = () => {
  const { value: isExpanded, toggle, setTrue: expand, setFalse: collapse } = useBoolean(false);
  const { value: isPlaying, setTrue: play, setFalse: pause } = useBoolean(false);
  const [position, setPosition] = useState({ x: window.innerWidth - 80, y: 60 }); // Initial position
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);

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

  // Dragging handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isDragging) {
      const newX = e.clientX - 20; // Adjust for button width/2
      const newY = e.clientY - 20; // Adjust for button height/2

      // Keep within window bounds
      const boundedX = Math.max(0, Math.min(newX, window.innerWidth - 40));
      const boundedY = Math.max(0, Math.min(newY, window.innerHeight - 40));

      setPosition({ x: boundedX, y: boundedY });
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove as any);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove as any);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

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
      onMouseDown={handleMouseDown}
      className="rounded-full p-4 cursor-move"
      size="sm"
      variant="primary"
      aria-label="Sound Controls"
    >
      <Icon color="white" name={isPlaying ? 'sound-off' : 'sound-on'} />
    </Button>
  );

  return (
    <div
      ref={dragRef}
      className="fixed flex flex-col gap-2 z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        userSelect: 'none', // Prevents text selection while dragging
      }}
    >
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
