import { Sound } from '@/lib/constants';
import { useSound } from '@/lib/hooks';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FC, useEffect, useState, useRef } from 'react';
import { Howl } from 'howler';
import { ArcadeApi } from '../../models/arcade-api';
import Game from '../../pacman/components/game/game';

export const GameController: FC = () => {
  const queryClient = useQueryClient();
  const titleThemeRef = useRef<Howl | null>(null);

  const { data: stats } = useQuery({
    queryKey: ['stats'],
    queryFn: async () => {
      const response = await ArcadeApi.stats.get();
      return response;
    },
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  const [showGame, setShowGame] = useState(false);

  const { play: playClick } = useSound(Sound.CLICK);

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

  const handleDirection = (direction: string) => {
    console.log('handleDirection', direction);
    playClick();
    const arrow = new KeyboardEvent('keydown', { key: direction });
    window.dispatchEvent(arrow);
  };

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

  const handleSubmit = () => {
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
          className="max-w-[300px] max-h-[300px] w-full h-full absolute top-[100px] left-[65px]"
          style={{
            transform: 'scaleY(0.8)',
          }}
        >
          <Game />
        </div>
      );
    }

    return (
      <div
        onClick={handleSubmit}
        className="max-w-[300px] max-h-[300px] w-full h-full absolute top-[270px] left-[100px]"
      >
        <p>Bro! Click on Power Button to start Game</p>
      </div>
    );
  };

  return (
    <div
      className="w-full h-full fixed top-0 left-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/arcade/game-controller.png)',
      }}
    >
      <span
        onClick={handleSubmit}
        className="w-[30px] h-[30px] absolute bottom-[417px] right-[60px]"
      />
      {renderGameContent()}
      <div className="absolute bottom-[155px] left-[80px]">
        <img src="/arcade/game-controller-button.png" useMap="#image-map" />

        <map name="image-map">
          <area onClick={() => handleDirection('ArrowUp')} coords="5,3,72,94" shape="rect" />
          <area onClick={() => handleDirection('ArrowLeft')} coords="85,5,247,95" shape="rect" />
          <area onClick={() => handleDirection('ArrowDown')} coords="6,104,109,197" shape="rect" />
          <area
            onClick={() => handleDirection('ArrowRight')}
            coords="138,101,244,198"
            shape="rect"
          />
        </map>
      </div>
    </div>
  );
};
