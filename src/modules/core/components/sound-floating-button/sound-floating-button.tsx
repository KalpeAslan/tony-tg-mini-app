'use client';
import { useBoolean, useToggle } from 'usehooks-ts';
import { Button } from '@/components';
import { Icon } from '@/components';

export const SoundFloatingButton = () => {
  const { value: isExpanded, toggle, setTrue: expand, setFalse: collapse } = useBoolean(false);
  const { value: isSoundOn, setTrue: setSoundOn, setFalse: setSoundOff } = useBoolean(false);

  const renderSoundOffButton = () => {
    return (
      <Button
        onClick={setSoundOff}
        className="rounded-full p-4"
        size="sm"
        variant="orange"
        aria-label="Sound"
      >
        <Icon color="white" name="sound-off" />
      </Button>
    );
  };

  const renderSoundOnButton = () => {
    return (
      <Button
        onClick={setSoundOn}
        className="rounded-full p-4"
        size="sm"
        variant="green"
        aria-label="Sound"
      >
        <Icon color="white" name="sound-on" />
      </Button>
    );
  };

  const renderNextButton = () => {
    return (
      <Button size="sm" className="rounded-full p-4" variant="primary" aria-label="Next">
        <Icon name="next" color="white" />
      </Button>
    );
  };

  const closeButton = (
    <Button
      onClick={toggle}
      className="rounded-full p-4"
      size="sm"
      variant="primary"
      aria-label="Close"
    >
      <Icon name="close" color="white" />
    </Button>
  );

  const renderExpandButtons = () => {
    if (isSoundOn) {
      return (
        <Button
          onClick={expand}
          className="rounded-full p-4"
          size="sm"
          variant="primary"
          aria-label="Sound"
        >
          <Icon color="white" name="sound-on" />
        </Button>
      );
    }

    return (
      <Button
        onClick={expand}
        className="rounded-full p-4"
        size="sm"
        variant="primary"
        aria-label="Sound"
      >
        <Icon color="white" name="sound-off" />
      </Button>
    );
  };

  return (
    <div className="fixed top-5 right-5 flex flex-col gap-2 z-50">
      {isExpanded ? (
        <div className="flex flex-col-reverse gap-2 animate-fade-in">
          {isSoundOn ? renderSoundOffButton() : renderSoundOnButton()}
          {renderNextButton()}
          {closeButton}
        </div>
      ) : (
        renderExpandButtons()
      )}
    </div>
  );
};
