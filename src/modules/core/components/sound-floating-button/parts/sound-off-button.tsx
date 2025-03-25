import { Button, Icon } from '@/components';

interface SoundButtonProps {
  onClick: () => void;
}

export const SoundOffButton = ({ onClick }: SoundButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="rounded-full p-4"
      size="sm"
      variant="orange"
      aria-label="Sound"
    >
      <Icon color="white" name="sound-off" />
    </Button>
  );
};
