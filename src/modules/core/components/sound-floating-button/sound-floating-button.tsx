'use client';
import { useBoolean } from 'usehooks-ts';
import { Button, Icon } from '@/components';
import { useState, useEffect, useRef } from 'react';

export const SoundFloatingButton = () => {
  const { value: isExpanded, toggle, setTrue: expand, setFalse: collapse } = useBoolean(false);
  const { value: isPlaying, setTrue: play, setFalse: pause } = useBoolean(false);
  const [position, setPosition] = useState({ x: window.innerWidth - 80, y: 90 }); // Initial position
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const dragRef = useRef<HTMLDivElement>(null);

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

  // Mouse dragging handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    e.preventDefault();
    e.stopPropagation(); // Prevent click events from bubbling
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;

      // Keep within window bounds
      const boundedX = Math.max(0, Math.min(newX, window.innerWidth - 40));
      const boundedY = Math.max(0, Math.min(newY, window.innerHeight - 40));

      setPosition({ x: boundedX, y: boundedY });
    }
  };

  // Touch dragging handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      const touch = e.touches[0];
      setDragOffset({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y,
      });
      e.stopPropagation(); // Prevent button's default touch handler from firing
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches.length === 1) {
      const touch = e.touches[0];
      const newX = touch.clientX - dragOffset.x;
      const newY = touch.clientY - dragOffset.y;

      // Keep within window bounds
      const boundedX = Math.max(0, Math.min(newX, window.innerWidth - 40));
      const boundedY = Math.max(0, Math.min(newY, window.innerHeight - 40));

      setPosition({ x: boundedX, y: boundedY });
      e.preventDefault(); // Prevent scrolling while dragging
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleTouchEnd);
      window.addEventListener('touchcancel', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [isDragging, dragOffset]);

  const handleNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % audioTracks.length;
    setCurrentTrackIndex(nextIndex);
  };

  const renderPlayButton = () => (
    <Button
      onClick={pause}
      className="rounded-full p-4"
      size="sm"
      variant="green"
      aria-label="Play"
    >
      <Icon color="white" name="sound-on" />
    </Button>
  );

  const renderPauseButton = () => (
    <Button
      onClick={play}
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
    <div className="cursor-move" onMouseDown={handleMouseDown} onTouchStart={handleTouchStart}>
      <Button
        onClick={expand}
        className="rounded-full p-4"
        size="sm"
        variant="primary"
        aria-label="Sound Controls"
      >
        <Icon color="white" name={!isPlaying ? 'sound-off' : 'sound-on'} />
      </Button>
    </div>
  );

  return (
    <div
      ref={dragRef}
      className="fixed flex flex-col gap-2 z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        userSelect: 'none', // Prevents text selection while dragging
        touchAction: 'none', // Prevents default touch actions like scrolling
      }}
    >
      {isExpanded ? (
        <div className="flex flex-col-reverse gap-2 animate-fade-in">
          {isPlaying ? renderPlayButton() : renderPauseButton()}
          {renderNextButton()}
          {closeButton}
        </div>
      ) : (
        renderExpandButton()
      )}
    </div>
  );
};
