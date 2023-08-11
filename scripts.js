// THIS IS FOR UPDATING AND DRAWING SNAKE

import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";
import { outsideGrid } from "./grid.js";
import { update as updateFood, draw as drawFood } from "./food.js";

let previousTime = 0;
let gameOver = false;

function main(currentTime) {
  if (gameOver) {
    if (confirm("You lost. Press ok to restart the game!")) {
      window.location = "/";
    }
    return;
  }

  window.requestAnimationFrame(main);
  let differ = (currentTime - previousTime) / 1000;
  if (differ < 1 / SNAKE_SPEED) return;
  previousTime = currentTime;
  console.log(differ);

  update();
  draw();
}

function update() {
  updateFood();
  updateSnake();
  checkDeath();
}

function draw() {
  const gameBoard = document.getElementById("game-board");
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

main();
