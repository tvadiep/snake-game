let inputDirection = { x: 1, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      lastInputDirection = inputDirection;
      break;
    case "ArrowDown":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      lastInputDirection = inputDirection;

      break;
    case "ArrowLeft":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      lastInputDirection = inputDirection;

      break;
    case "ArrowRight":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      lastInputDirection = inputDirection;

      break;
    default:
      break;
  }
});

export function getInputDirection() {
  return inputDirection;
}
