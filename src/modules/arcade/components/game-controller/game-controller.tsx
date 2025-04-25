import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FC, useEffect, useState, useRef } from 'react';
import { Howl } from 'howler';
import { ArcadeApi } from '../../models/arcade-api';
import Game from '../../pacman/components/game/game';
import { Buttons } from './parts';
import { useSound } from '@/lib/hooks';
import { Sound } from '@/lib/constants';
import { ModalBackdrop } from '@/lib/components';
import { OutOfPlay } from '../out-of-play';

export const GameController: FC = () => {
  const queryClient = useQueryClient();
  const titleThemeRef = useRef<Howl | null>(null);
  const [showOutOfPlays, setShowOutOfPlays] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Calculate position percentages dynamically based on screen size
  const calculateButtonPosition = () => {
    // Base values for 390x844 screen
    const baseWidth = 390;
    const baseHeight = 844;
    const baseBottomPercentage = 11.6;
    
    // Adjust bottom percentage based on screen height ratio
    const heightRatio = screenHeight / baseHeight;
    const adjustedBottomPercentage = Math.max(
      Math.min(baseBottomPercentage * (1 / heightRatio), 20), // Don't go above 20%
      5 // Don't go below 5%
    );
    
    return {
      bottom: `${adjustedBottomPercentage}%`,
    };
  };

  const { data: stats } = useQuery({
    queryKey: ['stats'],
    queryFn: async () => {
      const response = await ArcadeApi.stats.get();
      return response;
    },
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  const [showGame, setShowGame] = useState(false);

  useEffect(() => {
    titleThemeRef.current = new Howl({
      src: ['/audio/title_theme.wav'],
      loop: true,
      volume: 0.7,
    });

    return () => {
      if (titleThemeRef.current) {
        titleThemeRef.current.stop();
      }
    };
  }, []);

  useEffect(() => {
    if (!showGame && titleThemeRef.current) {
      titleThemeRef.current.play();
    } else if (showGame && titleThemeRef.current) {
      titleThemeRef.current.stop();
    }
  }, [showGame]);

  const startGameMutation = useMutation({
    mutationFn: () => ArcadeApi.game.start(),
    onSuccess: () => {
      setShowGame(true);
      // Invalidate stats to get updated playsLeft count
      queryClient.invalidateQueries({ queryKey: ['stats'] });
    },
    onError: error => {
      console.error('Error starting game:', error);
    },
  });
  const { play: playClick } = useSound(Sound.CLICK);

  const handleStartGame = () => {
    if (stats?.playsLeft === 0) {
      setShowOutOfPlays(true);
      return;
    }
    playClick();
    startGameMutation.mutate();
  };

  useEffect(() => {
    const handleGameEnded = (event: CustomEvent) => {
      const { score, level, player } = event.detail;
      console.log('Game ended!', { score, level, player });
      setShowGame(false);
    };

    window.addEventListener('gameEnded', handleGameEnded as EventListener);

    return () => {
      window.removeEventListener('gameEnded', handleGameEnded as EventListener);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', event => {
      if (['ArrowUp', 'ArrowDown'].includes(event.code)) {
        event.preventDefault();
      }
    });
  }, []);

  const renderGameContent = () => {
    if (showGame) {
      return (
        <div
          className="max-w-[300px] max-h-[300px] w-full h-full absolute"
          style={{
            top: '10.7%', // 100px/932px ≈ 10.7%
            left: '15.1%', // 65px/430px ≈ 15.1%
            transform: 'scaleY(0.8)',
          }}
        >
          <Game />
        </div>
      );
    }

    return (
      <div
        className="max-w-[300px] max-h-[300px] w-full h-full absolute"
        style={{
          top: '29%', // 270px/932px ≈ 29%
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <p className="text-center">Bro! Click on Power Button to start Game</p>
      </div>
    );
  };

  return (
    <div
      className="w-full h-full fixed top-0 left-0 bg-cover bg-center bg-no-repeat overflow-y-scroll"
      style={{
        backgroundImage: 'url(/arcade/game-controller.png)',
      }}
    >
      <span
        onClick={handleStartGame}
        className="w-[30px] h-[30px] absolute z-max"
        style={{
          bottom: '44%', // 417px/932px ≈ 44.7%
          right: '14.5%', // 60px/430px ≈ 14%
        }}
      />
      {renderGameContent()}
      <div
        className="absolute"
        style={{
          ...calculateButtonPosition(),
          left: '50%',
          transform: 'translateX(-50%)',
          transformOrigin: 'bottom center',
        }}
      >
        <Buttons isAviablePlay={!!stats?.playsLeft && stats.playsLeft > 0} />
      </div>
      {showOutOfPlays && (
        <ModalBackdrop onClose={() => setShowOutOfPlays(false)}>
          <OutOfPlay onClose={() => setShowOutOfPlays(false)} />
        </ModalBackdrop>
      )}
    </div>
  );
};
