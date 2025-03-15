import { Button } from '@/components/ui';
import { SectionMessage } from '@/components/ui/section-message';
import Image from 'next/image';

export const BalanceSection = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Image src="/invites/parachute.png" alt="Parachute" width={97} height={97} />
      <div className="flex flex-col gap-4 w-full">
        <SectionMessage radius="md">1234</SectionMessage>
        <Button variant="green" size="sm">
          claim
        </Button>
      </div>
    </div>
  );
};
