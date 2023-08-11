const GRID_SIDE = 24;

export function outsideGrid(position) {
  return (
    position.x < 1 ||
    position.x > GRID_SIDE ||
    position.y < 1 ||
    position.y > GRID_SIDE
  );
}
