import { Button } from '@/components/button';
import { SectionMessage } from '@/components/ui/custom/SectionMessage';
import Image from 'next/image';

export const BalanceSection = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Image src="/invites/parachute.png" alt="Parachute" width={97} height={97} />
      <div className="flex flex-col gap-4 w-full">
        <SectionMessage radius="lg">1234</SectionMessage>
        <Button variant="green" size="sm">
          claim
        </Button>
      </div>
    </div>
  );
};
