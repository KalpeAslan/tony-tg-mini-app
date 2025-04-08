import Image from 'next/image';

export const Banner = () => {
  return (
    <div className="bg-card flex w-full min-h-[105px] border-white-translucent rounded-3xl p-6 h-[137px] relative">
      <div>
        <p className="text-2xl">Complete missions</p>
        <p className="text-sm font-roboto">
          Earn <span className="color-yellow">EXP</span> from completing{' '}
          <span className="color-yellow">Check-Ins</span> and{' '}
          <span className="color-yellow">Daily Missions</span>!
        </p>
      </div>
      <div className="w-[157px]">
        <Image
          className="absolute right-0 bottom-0"
          src="/invites/tony-task.png"
          alt="tony-task"
          width={157}
          height={157}
        />
      </div>
    </div>
  );
};
