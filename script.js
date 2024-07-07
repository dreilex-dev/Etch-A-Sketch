const container = document.querySelector(".container");
const columns = 16;
const rows = 16;
const containerWidth = 400; // Lățimea dorită pentru container (px)
const containerHeight = 400; // Înălțimea dorită pentru container (px)

function createGrid() {
    // Calculating dimensions based on container size
    const squareSize = Math.min(containerWidth / columns, containerHeight / rows);

    // Remove existing squares if any
    container.innerHTML = '';

    // Loop through rows and columns to create divs
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const divSquare = document.createElement("div");
           // divSquare.textContent = i * columns + j + 1; // Numbering squares from 1 to 256
            divSquare.style.width = squareSize + "px";
            divSquare.style.height = squareSize + "px";
            divSquare.style.border = "1px solid black";
            divSquare.style.boxSizing = "border-box"; // Ensure borders are included in dimensions
            divSquare.style.position = "absolute";
            divSquare.style.left = j * squareSize + "px";
            divSquare.style.top = i * squareSize + "px";
            
            container.appendChild(divSquare);
        }
    }

    // Set container dimensions
    container.style.width = containerWidth + 'px';
    container.style.height = containerHeight + 'px';
    container.style.position = 'absolute';
    container.style.left = (window.innerWidth - containerWidth) / 2 + 'px';
    container.style.top = (window.innerHeight - containerHeight) / 2 + 'px';
}

// Call createGrid initially and on window resize
createGrid();
window.addEventListener('resize', createGrid);
