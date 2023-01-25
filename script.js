const btn_Reset = document.querySelector(".btn_Reset");
const btn_random = document.querySelector(".btn_Random");

//Creates board with size as input//

function createBoard(size) {
  let boardSize = size * size;

  for (let i = 0; i < boardSize; i++) {
    let gridItem = document.createElement("div");
    gridItem.className = "gridItem";
    document.getElementById(
      "playingBoard"
    ).style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    document.getElementById(
      "playingBoard"
    ).style.gridTemplateRows = `repeat(${size}, 1fr)`;

    playingBoard.append(gridItem);

    gridItem.addEventListener("mouseover", function () {
      gridItem.style.backgroundColor = "black";
    });

    btn_Reset.addEventListener("click", function () {
      gridItem.remove();
    });
  }
}

createBoard();

document.getElementById("submitButton").onclick = function () {
  let size = document.getElementById("submitValue").value;

  if (size < 2 || size > 100 || typeof size === "string") {
    window.alert("Please enter value between 1 and 100");
  } else {
    console.log(size);
    createBoard(size);
  }
};
