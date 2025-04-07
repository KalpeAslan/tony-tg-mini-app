export const useSound = (url: string) => {
  const play = () => {
    const audio = new Audio(url);
    // audio.play().catch(() => {
    //   // Ignore errors if audio can't be played
    // });
  };

  return {
    play,
  };
};