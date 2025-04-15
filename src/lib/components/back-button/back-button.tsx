import { SectionMessage } from '../section-message';
import { Icon } from '@/components';


interface BackButtonProps {
  onClick: () => void;
}


export const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <div className={"w-[55px]"} onClick={onClick}>
      <SectionMessage className='w-full h-full' message="" value={<Icon name="chevron-left" />} />
    </div>
  );
};
