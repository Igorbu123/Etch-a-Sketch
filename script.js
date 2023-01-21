let gridItem = document.createElement("div");

const playingBoard = document.querySelector(".playingBoard");

//playingBoard.append(gridItem);

function createBoard(num) {
  for (let i = 0; i < 5; i++) {
    playingBoard.append(gridItem);
  }
}

createBoard();
