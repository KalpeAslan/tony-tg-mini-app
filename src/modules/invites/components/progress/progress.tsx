interface ProgressProps {
  current: number;
  max: number;
  currentLevel?: number;
  nextLevel?: number;
}

export const Progress: React.FC<ProgressProps> = ({
  current,
  max,
  currentLevel = 2,
  nextLevel = 3,
}) => {
  const percentage = (current / max) * 100;

  return (
    <div className="relative w-full border-white-translucent border-2 rounded-full overflow-hidden py-8 z-9999" style={{
        background: `linear-gradient(90deg, rgba(255,255,255,0) 38%, rgba(255,255,255,1) 120%)`
    }}>
      {/* Progress fill */}
      <div
        className="h-full bg-green-400 transition-all duration-300 top-0 absolute"
        style={{ width: `${percentage}%` }}
      />

      {/* Current level indicator */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold font-roboto border-white-translucent border-2">
          {currentLevel}
        </div>
      </div>

      {/* Next level indicator */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold font-roboto border-white-translucent border-2">
          {nextLevel}
        </div>
      </div>

      {/* Progress text */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold font-roboto">
        <p className="text-xs italic">Reach Next Level:</p>
        <p>
          {current} out of {max}
        </p>
      </div>
    </div>
  );
};
