import type { ReactNode } from 'react';
import Image from 'next/image';

interface InvitedUsersSectionProps {
  count: number;
  children: ReactNode;
}

export function InvitedUsersSection({ count, children }: InvitedUsersSectionProps) {
  return (
    <div className="bg-[#6d3e95] rounded-2xl w-full max-w-md overflow-hidden shadow-md mb-4">
      <div className="p-4 border-b border-[#5d2e85]">
        <h3 className="text-white text-xl font-bold">
          YOU HAVE INVITED: <span className="text-[#f8c52c]">{count} DUDES</span>
        </h3>
        <p className="text-white text-sm">
          Earn <span className="text-[#f8c52c]">15%</span> from each one of you dudes shack and an
          additional <span className="text-[#f8c52c]">5%</span> from each pack they purchase!
        </p>
      </div>
      <div className="max-h-[300px] overflow-y-auto">{children}</div>
    </div>
  );
}

interface InvitedUserItemProps {
  name: string;
  amount: string;
  avatarUrl: string;
}

export function InvitedUserItem({ name, amount, avatarUrl }: InvitedUserItemProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-[#5d2e85]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={avatarUrl || '/placeholder.svg'}
            alt={name}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <span className="text-white font-medium">{name}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-white font-bold">{amount}</span>
        <div className="w-6 h-6">
          <Image
            src="/placeholder.svg?height=24&width=24"
            alt="Coin"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
