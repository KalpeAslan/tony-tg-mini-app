import type { ReactNode } from 'react';

interface PromoContainerProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export function PromoContainer({ title, description, icon }: PromoContainerProps) {
  return (
    <div className="bg-gradient-to-r from-[#e07a19] to-[#f5a623] rounded-3xl p-4 flex items-center gap-4 w-full max-w-md shadow-lg">
      {icon && <div className="flex-shrink-0">{icon}</div>}
      <div className="flex flex-col">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
}
