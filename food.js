// THIS IS FOR GENERATING AND DRAWING FOOD
import { onSnake, expandSnake } from "./snake.js";

let food = generateFood();
const EXPANSION_RATE = 1;

function generateFood() {
  const foodPosition = {
    x: Math.floor(Math.random() * 22),
    y: Math.floor(Math.random() * 22),
  };
  if (foodPosition == null || onSnake(foodPosition)) return generateFood();
  return foodPosition;
}

export function update(options) {
  console.log(food);
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = generateFood();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridColumnStart = food.x;
  foodElement.style.gridRowStart = food.y;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}
