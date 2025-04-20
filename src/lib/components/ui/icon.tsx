import React from 'react';
import { IconName } from './icons';
import { cn } from '@/lib/utils';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  name: IconName;
  size?: number | string;
  width?: number | string;
  height?: number | string;
}

export const Icon = ({ name, size = 24, width, height, className, ...props }: IconProps) => {
  return (
    <svg
      className={cn('inline-block', className)}
      width={width || size}
      height={height || size}
      {...props}
    >
      <use href={`#${name}`} />
    </svg>
  );
};
