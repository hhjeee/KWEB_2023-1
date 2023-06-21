const ROW_MIN = 0;
const ROW_MAX = 6;
const COL_MIN = 0;
const COL_MAX = 7;
const redBox = { row: 5, col: 0 };

function getElementByPosition(position) {
  const row = document.getElementsByClassName("cells")[position.row];
  const col = row.getElementsByClassName("cell")[position.col];
  return col;
}

function getNewPositionByKey(event) {
  const position = {
    row: redBox.row,
    col: redBox.col,
  };
  switch (event) {
    case 37: //left
      position.col--;
      break;
    case 38: //up
      position.row--;
      break;
    case 39: //right
      position.col++;
      break;
    case 40: //down
      position.row++;
      break;
  }
  return position;
}

function isPositionInRange(position) {
  if (
    position.row >= ROW_MIN &&
    position.row <= ROW_MAX &&
    position.col >= COL_MIN &&
    position.col <= COL_MAX
  )
    return true;
  else return false;
}

function isPositionWall(position) {
  const wall = getElementByPosition(position).classList.contains("wall");
  return wall;
}

function newPos(event) {
  getElementByPosition(redBox).classList.remove("current");
  const newPosition = getNewPositionByKey(event.keyCode);
  if (isPositionInRange(newPosition) && !isPositionWall(newPosition)) {
    redBox.row = newPosition.row;
    redBox.col = newPosition.col;
  }
  const currentPosition = getElementByPosition(redBox);
  currentPosition.classList.add("current");
  if (currentPosition.classList.contains("target")) alert("You Escaped!");
}

document.addEventListener("keyup", newPos);
