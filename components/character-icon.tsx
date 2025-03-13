interface CharacterIconProps {
  variant?: 'blue' | 'green';
  className?: string;
}

export function CharacterIcon({ variant = 'blue', className = '' }: CharacterIconProps) {
  const headColor = variant === 'blue' ? 'bg-[var(--bg-accent)]' : 'bg-[#55fc33]';

  return (
    <div className={`relative w-16 h-16 ${className}`}>
      {/* Head */}
      <div
        className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-8 ${headColor} rounded-md`}
      ></div>

      {/* Eyes/mouth */}
      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-[#002a3a] rounded-full"></div>

      {/* Body */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-[#e07a19] rounded-full"></div>

      {/* Arms */}
      <div className="absolute top-8 left-1/4 w-3 h-6 bg-[#e07a19] rounded-full transform -rotate-30"></div>
      <div className="absolute top-8 right-1/4 w-3 h-6 bg-[#e07a19] rounded-full transform rotate-30"></div>

      {/* Feet */}
      <div className="absolute bottom-0 left-1/3 w-3 h-3 bg-[#cc6600] rounded-full"></div>
      <div className="absolute bottom-0 right-1/3 w-3 h-3 bg-[#cc6600] rounded-full"></div>
    </div>
  );
}
