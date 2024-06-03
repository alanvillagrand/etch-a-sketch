function createGrid(size) {
    const container = document.querySelector(".container");

    const containerWidth = container.clientWidth;
    const cellSize = (containerWidth / size) - 2;

    for (let i = 0; i < size * size; i++) {

        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
    
        container.appendChild(cell);
    }
}

createGrid(16);