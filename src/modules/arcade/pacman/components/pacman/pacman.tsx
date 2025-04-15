'use client';

import { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import './pacman.css';
import Game from '../game/game';
import { ArcadeApi } from '../../../models';
import { OutOfPlay } from '@/modules/arcade/components';

export const PacmanMain = () => {
  const subRoot = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();
  const [showGame, setShowGame] = useState(false);

  const { data: stats } = useQuery({
    queryKey: ['arcade', 'stats'],
    queryFn: async () => {
      const response = await ArcadeApi.stats.get();
      return response;
    },
    refetchInterval: 30000, // Refetch every 30 seconds
  });


  const startGameMutation = useMutation({
    mutationFn: () => ArcadeApi.game.start(),
    onSuccess: () => {
      setShowGame(true);
      // Invalidate stats to get updated playsLeft count
      queryClient.invalidateQueries({ queryKey: ['arcade', 'stats'] });
    },
    onError: error => {
      console.error('Error starting game:', error);
    },
  });

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

  const handleSubmit = () => {
    startGameMutation.mutate();
  };

  const renderGameContent = () => {
    return <Game />;
  };

  const renderInfo = () => {
    // // Show OutOfPlay only when no tickets left
    // if (stats?.tickets === 0) {
    //   return <OutOfPlay />;
    // }

    return (
      <>
        <img
          className="title-gif"
          src="https://media4.giphy.com/media/42rO49pxzaMnK/giphy.gif?cid=790b76116dc1bedf27887938cbe8df55b210b12f842af0e9&rid=giphy.gif&ct=g"
          alt="Pac-Man gif"
        />
        <div className="register flex flex-col items-center justify-center">
          <button
            className="play-button"
            id="play-button"
            onClick={handleSubmit}
            disabled={startGameMutation.isPending || stats?.playsLeft === 0}
          >
            {startGameMutation.isPending ? 'Starting' : 'Play'}
          </button>
        </div>
      </>
    );
  };

  const content = showGame ? renderGameContent() : renderInfo();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div ref={subRoot} />
      <div className="main" id="main">
        <br></br>
        <br></br>
        {content}
        <p className="name-error" id="name-error"></p>
      </div>
    </div>
  );
};
