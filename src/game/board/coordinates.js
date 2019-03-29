export const generateRandomCoordinates = () => {
  const rand = max => (Math.random() * (max - 0 + 1)) << 0;
  return [rand(window.screen.availWidth), rand(window.screen.availHeight)];
};
