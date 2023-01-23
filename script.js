let gridItems = document.getElementsByClassName("gridItem");

const playingBoard = document.querySelector(".playingBoard");

//playingBoard.append(gridItem);

//Creates default 16x16 playing board//

function createBoard(size) {
  for (let i = 0; i < 256; i++) {
    let gridItem = document.createElement("div");
    gridItem.className = "gridItem";
    playingBoard.append(gridItem);

    gridItem.addEventListener("mouseover", function () {
      gridItem.style.backgroundColor = "black";
    });
  }
}

createBoard();
