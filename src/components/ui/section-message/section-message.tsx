import { FC, PropsWithChildren, HTMLAttributes } from 'react';
import { TRadius, TSizes, TColors } from './types';
import styles from './section-message.module.css';
import { cn } from '@/lib/utils';

interface SectionMessageProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  radius?: TRadius;
  color?: TColors;
  size?: TSizes;
  fullWidth?: boolean;
}

export const SectionMessage: FC<SectionMessageProps> = ({
  radius = 'sm',
  color = 'default',
  size = 'sm',
  children,
  fullWidth = false,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center text-center font-roboto italic font-bold border-white-translucent',
        styles.sectionMessage,
        styles[`radius-${radius}`],
        styles[`color-${color}`],
        styles[`size-${size}`],
        fullWidth && styles.fullWidth,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
