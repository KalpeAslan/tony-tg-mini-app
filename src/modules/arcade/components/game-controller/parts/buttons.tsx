import { Sound } from "@/lib/constants";
import { useSound } from "@/lib/hooks";

export const Buttons = () => {
  const { play: playClick } = useSound(Sound.CLICK);

  const handleDirection = (direction: string) => {
    playClick();
    const arrow = new KeyboardEvent('keydown', { key: direction });
    window.dispatchEvent(arrow);
  };

  return (
    <>
      <img src="/arcade/game-controller-button.png" useMap="#image-map" />

      <map name="image-map">
        <area 
          onClick={() => handleDirection('ArrowUp')} 
          coords="1.2%,0.3%,16.7%,10.1%" 
          shape="rect" 
        />
        <area 
          onClick={() => handleDirection('ArrowLeft')} 
          coords="19.8%,0.5%,57.4%,10.2%" 
          shape="rect" 
        />
        <area 
          onClick={() => handleDirection('ArrowDown')} 
          coords="1.4%,11.2%,25.3%,21.1%" 
          shape="rect" 
        />
        <area 
          onClick={() => handleDirection('ArrowRight')} 
          coords="32.1%,10.8%,56.7%,21.2%" 
          shape="rect" 
        />
      </map>
    </>
  );
};
