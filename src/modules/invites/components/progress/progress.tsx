import { Level } from '@/modules/core';

interface ProgressProps {
  level: Level;
}

export const Progress: React.FC<ProgressProps> = ({
  level,
}) => {
  const { experience, experienceToNextLevel, level: currentLevel, progressPercentage } = level;
  const nextLevel = currentLevel + 1;

  return (
    <div className="relative w-full border-white-translucent border-2 rounded-full overflow-hidden py-8 z-max" style={{
        background: `linear-gradient(90deg, rgba(255,255,255,0) 38%, rgba(255,255,255,1) 120%)`
    }}>
      {/* Progress fill */}
      <div
        className="h-full bg-green-400 transition-all duration-300 top-0 absolute"
        style={{ width: `${progressPercentage}%` }}
      />

      {/* Current level indicator */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold font-roboto border-white-translucent">
          {currentLevel}
        </div>
      </div>

      {/* Next level indicator */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold font-roboto border-white-translucent">
          {nextLevel}
        </div>
      </div>

      {/* Progress text */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold font-roboto">
        <p className="text-xs italic">Reach Next Level:</p>
        <p>
          {experience} out of {experience + experienceToNextLevel}
        </p>
      </div>
    </div>
  );
};
