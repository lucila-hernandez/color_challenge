function getRandomNumber() {
  return Math.floor(Math.random() * 256); 
}

function toHex(n) {
  return n.toString(16).padStart(2, '0'); 
}

function generateRandomHexColor() {
  const r = getRandomNumber();
  const g = getRandomNumber();
  const b = getRandomNumber();
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export default generateRandomHexColor;
