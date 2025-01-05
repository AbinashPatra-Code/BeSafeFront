// Convert decimal RGB to hex color
const rgbToHex = (r: number, g: number, b: number): string => {
  const toHex = (n: number) => Math.round(n).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

// Get color gradient between red and green based on value (0-1)
export const getGradientColor = (value: number): string => {
  // Ensure value is between 0 and 1
  const normalizedValue = Math.max(0, Math.min(1, value));
  
  // Red component decreases as value increases
  const red = 239 * (1 - normalizedValue);
  // Green component increases as value increases
  const green = 52 + (211 * normalizedValue);
  // Blue component is minimal
  const blue = 68 * (1 - normalizedValue);
  
  return rgbToHex(red, green, blue);
};