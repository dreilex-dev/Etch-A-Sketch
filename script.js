const container = document.querySelector(".container");
const button = document.getElementById("reset-button");
const buttonContainer = document.querySelector(".button-container");

let columns = 16;
let rows = 16;
const containerWidth = 400; 
const containerHeight = 400; 

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function darkenColor(color) {
  const colorMatch = color.match(/\d+/g);
  const r = Math.max(0, colorMatch[0] - 25);
  const g = Math.max(0, colorMatch[1] - 25);
  const b = Math.max(0, colorMatch[2] - 25);
  return `rgb(${r},${g},${b})`;
}

function createGrid() {

  const squareSize = Math.min(containerWidth / columns, containerHeight / rows);


  container.innerHTML = '';

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const divSquare = document.createElement("div");
      divSquare.classList.add("hoveringBox");
      divSquare.style.width = squareSize + "px";
      divSquare.style.height = squareSize + "px";
      divSquare.addEventListener("mouseover", () => {
        const currentColor = divSquare.style.backgroundColor;
        if (currentColor) {
          divSquare.style.backgroundColor = darkenColor(currentColor);
        } else {
          divSquare.style.backgroundColor = getRandomColor();
        }
      });
      container.appendChild(divSquare);
    }
  }


  container.style.width = containerWidth + 'px';
  container.style.height = containerHeight + 'px';
  container.style.margin = 'auto';
}

function resetGrid() {
  const userRequestSquares = prompt("Please give the number of squares per side (max 100): ");
  const gridSize = parseInt(userRequestSquares);

  if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
    columns = gridSize;
    rows = gridSize;
    createGrid();
  } else {
    alert("Please enter a number between 1 and 100.");
  }
}


buttonContainer.style.position = 'absolute';
buttonContainer.style.top = '10px';
buttonContainer.style.left = '10px';


createGrid();
window.addEventListener('resize', createGrid);


button.addEventListener("click", resetGrid);
