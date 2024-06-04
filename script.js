const header = document.querySelector(".header");
const container = document.querySelector(".container");

let selectedColor = "#000000";
let pressedDown = false;

function createGrid(size) {
    const containerWidth = container.clientWidth;
    const cellSize = (containerWidth / size) - 2;

    for (let i = 0; i < size * size; i++) {

        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;

        // Event listener when mouse hovers over cell
        cell.addEventListener("mouseover", function() {
            this.style.backgroundColor = selectedColor;
        })

        cell.addEventListener("mousedown", function() {
            console.log("pressed down");
            this.style.backgroundColor = selectedColor;
            pressedDown = true;
        })

        cell.addEventListener("mouseenter", function() {
            if (pressedDown) {
                console.log("mouse entered");
                this.style.backgroundColor = selectedColor;
            }
        })

        // Event listener when mouse moves out
        cell.addEventListener('mouseout', function() {
            if (!pressedDown) {
                this.style.backgroundColor = "";
            }
        })

        cell.addEventListener("mouseup", function() {
            pressedDown = false;
        })

        container.appendChild(cell);
    }
}

// Create welcome header text
const headerText = document.createElement("h1");
headerText.textContent = "Welcome to Etch-A-Sketch!";
header.appendChild(headerText);

// Create header options
const options = document.createElement("div");
options.classList.add("options");
header.appendChild(options);

const colorPickerText = document.createElement("p");
colorPickerText.textContent = "Pick a color:";
options.appendChild(colorPickerText);

const colorPicker = document.createElement("input");
colorPicker.type = "color";
colorPicker.addEventListener("change", () => {
    selectedColor = colorPicker.value;
})
options.appendChild(colorPicker);

const clearButton = document.createElement("button");
clearButton.classList.add("button");
clearButton.textContent = "Clear";
options.appendChild(clearButton);



createGrid(16);