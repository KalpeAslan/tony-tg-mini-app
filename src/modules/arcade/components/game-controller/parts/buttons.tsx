import { Sound } from "@/lib/constants";
import { useSound } from "@/lib/hooks";
import { useState } from "react";

export const Buttons = () => {
  const { play: playClick } = useSound(Sound.CLICK);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleDirection = (direction: string) => {
    playClick();
    setActiveButton(direction);
    const arrow = new KeyboardEvent('keydown', { key: direction });
    window.dispatchEvent(arrow);
    
    // Reset the active state after animation
    setTimeout(() => setActiveButton(null), 150);
  };

  return (
    <div className="w-[250px] h-[250px] flex items-center justify-center">
      <div className="relative w-full h-full flex flex-col items-center">
        {/* Top button */}
        <div className="flex justify-center">
          <button 
            className={`w-20 h-20 rounded-full bg-transparent bg-center bg-no-repeat bg-contain border-none cursor-pointer transition-transform duration-150 ${activeButton === 'ArrowUp' ? 'scale-90' : ''}`}
            onClick={() => handleDirection('ArrowUp')}
            style={{ backgroundImage: "url('/arcade/buttons/top.png')" }}
          />
        </div>
        
        {/* Middle row with left and right buttons */}
        <div className="flex w-full justify-center -mt-2">
          <button 
            className={`w-20 h-20 rounded-3xl bg-transparent bg-center bg-no-repeat bg-contain border-none cursor-pointer transition-transform duration-150 ${activeButton === 'ArrowLeft' ? 'scale-90' : ''}`}
            onClick={() => handleDirection('ArrowLeft')}
            style={{ backgroundImage: "url('/arcade/buttons/left.png')" }}
          />
          
          <button 
            className={`w-20 h-20 rounded-3xl bg-transparent bg-center bg-no-repeat bg-contain border-none cursor-pointer transition-transform duration-150 ${activeButton === 'ArrowRight' ? 'scale-90' : ''}`}
            onClick={() => handleDirection('ArrowRight')}
            style={{ 
              backgroundImage: "url('/arcade/buttons/left.png')",
              transform: "rotate(180deg)"
            }}
          />
        </div>
        
        {/* Bottom button */}
        <div className="flex justify-center -mt-2">
          <button 
            className={`w-20 h-20 rounded-3xl bg-transparent bg-center bg-no-repeat bg-contain border-none cursor-pointer transition-transform duration-150 ${activeButton === 'ArrowDown' ? 'scale-90' : ''}`}
            onClick={() => handleDirection('ArrowDown')}
            style={{ backgroundImage: "url('/arcade/buttons/bottom.png')" }}
          />
        </div>
      </div>
    </div>
  );
};
