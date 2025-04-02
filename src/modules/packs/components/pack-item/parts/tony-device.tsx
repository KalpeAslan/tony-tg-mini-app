import Image from 'next/image';
import { FC } from 'react';

type size = 's' | 'l';

const sizes: Record<size, { width: number; height: number }> = {
  s: { width: 100, height: 100 },
  l: { width: 246, height: 246 },
};

interface TonyDeviceProps {
  size: size;
  img: string | null;
}

export const TonyDevice: FC<TonyDeviceProps> = ({ size = 's', img }) => {
  return (
    <Image
      src={img || '/packs/tony-card.png'}
      alt="Tony Device"
      width={sizes[size].width}
      height={sizes[size].height}
    />
  );
};
