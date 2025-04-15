import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
interface SectionMessageProps {
  message: string;
  value: number | ReactNode | string;
  leftContent?: ReactNode;
  className?: string;
}

export const SectionMessage = ({ message, value, leftContent, className }: SectionMessageProps) => {
  return (
    <div
      style={{
        background:
          'linear-gradient(90deg, rgba(255,255,255,0) 38%, rgba(255,255,255,0.590095413165266) 99%)',
      }}
      className={cn("border-white-translucent border-2 font-roboto font-bold italic rounded-full p-1 flex items-center gap-2 text-center w-full justify-center", className)}
    >
      {leftContent && <div className="flex items-center justify-center whitespace-nowrap">{leftContent}</div>}
      <div className="flex flex-col">
        <p className="text-xs">{message}</p>
        <p className="text-xl">{value}</p>
      </div>
    </div>
  );
};
