// THIS IS FOR UPDATING AND DRAWING SNAKE

import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
} from "./snake.js";
// import { update as updateFood, draw as drawFood } from "./food.js";

let previousTime = 0;

function main(currentTime) {
  window.requestAnimationFrame(main);
  let differ = (currentTime - previousTime) / 1000;
  if (differ < 1 / SNAKE_SPEED) return;
  previousTime = currentTime;
  console.log(differ);

  update();
  draw();
}

function update() {
  updateSnake();
}

function draw() {
  const gameBoard = document.getElementById("game-board");
  drawSnake(gameBoard);
}

main();
