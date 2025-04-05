import React from 'react';
import { appConfig } from '../../../../configs/app.config';

export interface PacmanProps {
  width?: string;
  height?: string;
}

export const Pacman: React.FC<PacmanProps> = ({ 
  width = '100%', 
  height = '100vh' 
}) => {
  return (
    <div style={{ 
      width, 
      height,
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 10
    }}>
      <iframe
        src={appConfig.pacmanUrl}
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        title="Pacman Game"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Pacman;
