import React from 'react';
import { IconName } from './icons';
import { cn } from '@/lib/utils';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  name: IconName;
  size?: number | string;
}

export const Icon = ({ name, size = 24, className, ...props }: IconProps) => {
  return (
    <svg className={cn('inline-block', className)} width={size} height={size} {...props}>
      <use href={`#${name}`} />
    </svg>
  );
};
