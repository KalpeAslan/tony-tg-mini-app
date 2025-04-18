'use client';

import './pacman.css';
import { GameController } from '@/modules/arcade/components/game-controller/game-controller';

export const PacmanMain = () => {
  const renderGameContent = () => {
    return <GameController />;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="main" id="main">
        <br></br>
        <br></br>
        {renderGameContent()}
        <p className="name-error" id="name-error"></p>
      </div>
    </div>
  );
};
