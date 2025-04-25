export function computeComponentDimensions(windowWidth = 390, windowHeight = 844) {
  const baseWindowWidth = 390;
  const baseWindowHeight = 844;
  const baseComponentWidth = 250;
  const baseComponentHeight = 250;

  // Calculate scale factors based on window dimensions
  const widthScale = windowWidth / baseWindowWidth;
  const heightScale = windowHeight / baseWindowHeight;

  // Use the smaller scale factor to maintain aspect ratio and avoid overflow
  const scale = Math.min(widthScale, heightScale);

  // Compute dynamic dimensions
  const componentWidth = baseComponentWidth * scale;
  const componentHeight = baseComponentHeight * scale;

  return {
    width: componentWidth,
    height: componentHeight,
  };
}
