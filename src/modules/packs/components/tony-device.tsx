import Image from 'next/image';
import { FC } from 'react';

type size = 's' | 'l';

const sizes: Record<size, { width: number; height: number }> = {
  s: { width: 100, height: 100 },
  l: { width: 346, height: 346 },
};

interface TonyDeviceProps {
  size: size;
}

export const TonyDevice: FC<TonyDeviceProps> = ({ size = 's' }) => {
  return (
    <Image
      src="/packs/tony-card.png"
      alt="Tony Device"
      width={sizes[size].width}
      height={sizes[size].height}
    />
  );
};
