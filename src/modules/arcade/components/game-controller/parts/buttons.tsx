import { Sound } from "@/lib/constants";
import { useSound } from "@/lib/hooks";
import { useState, useMemo, FC } from "react";
import styles from "./buttons.module.css";
import { computeComponentDimensions } from "../helpers";
import { useWindowSize } from "usehooks-ts";


interface ButtonsProps {
  isAviablePlay: boolean
}

export const Buttons: FC<ButtonsProps> = ({ isAviablePlay }) => {
  const { play: playClick } = useSound(Sound.CLICK);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const { width: componentWidth, height: componentHeight } = useMemo(() => computeComponentDimensions(windowWidth, windowHeight), [windowWidth, windowHeight]);

  const handleDirection = (direction: string) => {

    playClick();
    if (!isAviablePlay) return;
    setActiveButton(direction);
    const arrow = new KeyboardEvent('keydown', { key: direction });
    window.dispatchEvent(arrow);
    
    // Reset the active state after animation
    setTimeout(() => setActiveButton(null), 150);
  };

  return (
    <div 
      className="flex items-center justify-center"
      style={{ 
        width: `${componentWidth}px`, 
        height: `${componentHeight}px` 
      }}
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Top button */}
        <div className="flex justify-center">
          <button 
            className={`${styles.button} ${activeButton === 'ArrowUp' ? styles.buttonActive : ''}`}
            onClick={() => handleDirection('ArrowUp')}
            style={{ backgroundImage: "url('/arcade/buttons/top.png')" }}
          />
        </div>
        
        {/* Middle row with left and right buttons */}
        <div className="flex w-full justify-center -mt-2 gap-8">
          <button 
            className={`${styles.button} ${activeButton === 'ArrowLeft' ? styles.buttonActive : ''}`}
            onClick={() => handleDirection('ArrowLeft')}
            style={{ backgroundImage: "url('/arcade/buttons/left.png')" }}
          />
          
          <button 
            className={`${styles.button} ${activeButton === 'ArrowRight' ? styles.buttonActive : ''}`}
            onClick={() => handleDirection('ArrowRight')}
            style={{ 
              backgroundImage: "url('/arcade/buttons/right.png')",
            }}
          />
        </div>
        
        {/* Bottom button */}
        <div className="flex justify-center -mt-2">
          <button 
            className={`${styles.button} ${activeButton === 'ArrowDown' ? styles.buttonActive : ''}`}
            onClick={() => handleDirection('ArrowDown')}
            style={{ backgroundImage: "url('/arcade/buttons/bottom.png')" }}
          />
        </div>
      </div>
    </div>
  );
};
