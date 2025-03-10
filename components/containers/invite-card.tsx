import type { ReactNode } from 'react';

interface InviteCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  highlight?: string;
}

export function InviteCard({ title, description, icon, highlight }: InviteCardProps) {
  return (
    <div className="bg-[#6d3e95] rounded-2xl p-4 flex items-center gap-4 w-full max-w-md shadow-md mb-3">
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex flex-col">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-white text-sm">
          Earn <span className="text-[#f8c52c]">{highlight}</span> {description}
        </p>
      </div>
    </div>
  );
}
