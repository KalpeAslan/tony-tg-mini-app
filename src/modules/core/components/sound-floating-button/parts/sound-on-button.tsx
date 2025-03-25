import { Button, Icon } from '@/components';

interface SoundOnButtonProps {
  onClick: () => void;
}

export const SoundOnButton = ({ onClick }: SoundOnButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="rounded-full p-4"
      size="sm"
      variant="primary"
      aria-label="Sound"
    >
      <Icon color="white" name="sound-on" />
    </Button>
  );
};
