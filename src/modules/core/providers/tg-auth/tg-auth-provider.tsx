'use client';

import { FC, PropsWithChildren } from 'react';
import { useTg } from '../../hooks/use-tg';

export const TgAuthProvider: FC<PropsWithChildren> = ({ children }) => {
  useTg();
  return <>{children}</>;
};
