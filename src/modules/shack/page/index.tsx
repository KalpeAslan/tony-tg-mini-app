import React from 'react';
import { Pacman } from '../components/pacman/pacman';

export interface ShackPageProps {
  className?: string;
}

export const ShackPage: React.FC<ShackPageProps> = () => {
  return <Pacman />;
};

export default ShackPage; 