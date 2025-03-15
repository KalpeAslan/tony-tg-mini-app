import { SectionMessage } from '@/components/ui/SectionMessage';
import { CurrenciesSection, TonyDevice } from './parts';
import { Task } from '@/components/task';

export const PackItem = () => {
  return (
    <div>
      {/* Store buttons */}
      <div className="flex gap-4 w-full max-w-md mb-8">
        <SectionMessage radius="md" color="warning" fullWidth>
          <p className="flex items-center justify-center">STORE</p>
        </SectionMessage>
        <SectionMessage radius="md" color="transparent" fullWidth>
          <p className="flex items-center justify-center">YOUR PACKS</p>
        </SectionMessage>
      </div>

      {/* Tony Device */}
      <div className="flex justify-center mb-8">
        <TonyDevice size="l" />
      </div>

      {/* Currency indicators */}
      <div className="w-full max-w-md mb-6">
        <CurrenciesSection />
      </div>

      {/* <Task key={task.title} {...task} /> */}
    </div>
  );
};
