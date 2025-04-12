'use client';

import { useEffect, useRef, useState } from 'react';
import './pacman.css';
import Game from '../game/game';

export const PacmanMain = () => {
  const subRoot = useRef<HTMLDivElement>(null);

  const [showGame, setShowGame] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', event => {
      if (['ArrowUp', 'ArrowDown'].includes(event.code)) {
        event.preventDefault();
      }
    });
  }, []);

  const handleSubmit = () => {
    setShowGame(true);
  };

  const content = showGame ? (
    <Game />
  ) : (
    <>
      <img
        className="title-gif"
        src="https://media4.giphy.com/media/42rO49pxzaMnK/giphy.gif?cid=790b76116dc1bedf27887938cbe8df55b210b12f842af0e9&rid=giphy.gif&ct=g"
        alt="Pac-Man gif"
      />
      <div className="register">
        <button className="play-button" id="play-button" onClick={handleSubmit}>
          Play
        </button>
      </div>
    </>
  );

  return (
    <>
      <div ref={subRoot} />
      <div className="main" id="main">
        <br></br>
        <br></br>
        {content}
        <p className="name-error" id="name-error"></p>
      </div>
    </>
  );
};
