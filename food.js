// THIS IS FOR GENERATING AND DRAWING FOOD
export function update(options) {
  console.log("update food");
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = x;
  foodElement.style.gridColumnStart = y;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}
