/*
have a list of colors
have a variable which contains the current selected color

we need a function to create the cells

we need a function which gets the cell when clicked

we need to have a function which accepts a color and a cell and changes the color of the cell

*/


const listOfColors = [
    { name: "black", color: "#000000" },
    { name: "white", color: "#ffffff" },
    { name: "blue", color: "#0000ff" },
    { name: "aqua", color: "#00FFFF" },
    { name: "blueviolet", color: "#8A2BE2" },
    { name: "purple", color: "#800080" },
    { name: "red", color: "#FF0000" },
    { name: "crimson", color: "#DC143C" },
    { name: "fuchsia", color: "#FF00FF" },
    { name: "green", color: "#008000" },
    { name: "lime", color: "#00FF00" },
    { name: "yellow", color: "#FFFF00" },

];

const colorName = [
    {name: "black"}
]

const gridSize = 6;
const textBox = document.getElementById('text-box');
const cellCss = 'cell';
const gridId = '#grid'
const colorGridId = '#colors';
const resetButton = document.getElementById('reset-button');
const changeColorButton = document.getElementById('change-color-button');

let currentColor = "";

function createGrid(container, size) {
    //This creates the grid
    const gridContainer = document.querySelector(container);
    const gridSize = size * size;
    for (let x = 0; x < gridSize; x++) {
        const cell = document.createElement('div');
        cell.classList.add(cellCss);
        cell.addEventListener('click', getClickedCell)
        gridContainer.appendChild(cell);
    }
}

function createColorGrid(container, listColors) {
    const gridContainer = document.querySelector(container);
    const gridSize = listColors.length;
    for (let x = 0; x < listColors.length; x++) {
        const cell = document.createElement('div');
        cell.classList.add(cellCss);
        cell.id = listColors[x].name;
        cell.title = listColors[x].name;
        cell.style.backgroundColor = listColors[x].color;
        cell.addEventListener('click', getClickedColor)
        gridContainer.appendChild(cell);
    }
}

function createTextBox(container, size) {
    //This creates the grid
    const gridContainer = document.querySelector(container);
    const gridSize = size * size;
    for (let x = 0; x < gridSize; x++) {
        const cell = document.createElement('div');
        cell.classList.add(cellCss);
        cell.addEventListener('click', getClickedCell)
        gridContainer.appendChild(cell);
    }
}

function getClickedCell(event) {
    const currentCell = event.currentTarget;
    //This get the cell that was clicked
    if (currentColor) {
        changeCellColor(currentColor, currentCell)
    }
}

function getClickedColor(event) {
    //This get the clicked color
    const colorCell = event.currentTarget;
    currentColor = listOfColors.find(x => x.name == colorCell.id).color;
}

function getClickedColor(event) {
    const colorCell = event.currentTarget;
    currentColor = listOfColors.find(x => x.name == colorCell.id).color;
    //highlightColor(colorCell);
    updateTextBoxColor (colorCell.id)
}

function changeCellColor(currentColor, currentCell) {
    //this will change the color of the current cell
    currentCell.style.backgroundColor = currentColor;
}

function resetColors() {
    //this will reset the grid to white
    const gridCells = document.querySelectorAll(`${gridId} .cell`);
    gridCells.forEach(cell => {
        cell.style.backgroundColor = '';
    });
}

function changeAllColors() {
    //this will change all of the colors to the current cell
    const gridCells = document.querySelectorAll(`${gridId} .cell`);
    gridCells.forEach(cell => {
        cell.style.backgroundColor = currentColor;
    });
}

function highlightColor(cell) {
    //*is supposed to highlight the color selected 
    const colorCells = document.querySelectorAll(`${colorGridId} .cell`);
    colorCells.forEach(c => {
        c.classList.remove('highlighted');
    });
    cell.classList.add('highlighted');
}

function updateTextBoxColor(colorName) {
    //Displays the name of the color selected
    textBox.textContent = `${colorName}`;
}

function initialize() {
    //setup the grid

    createGrid(gridId, gridSize);
    createColorGrid(colorGridId, listOfColors);
    
    resetButton.addEventListener('click', resetColors);
    changeColorButton.addEventListener('click', changeAllColors);
}


initialize();