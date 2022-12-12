const container = document.querySelector('#container');

function makeGrid(num){
    let numGrid = num * num;
    let size = (600 / num) - 4;
        for (let i = 0; i < numGrid; i++) {
        const content = document.createElement('div');
        content.classList.add('square');
        container.appendChild(content);
    }
    let elements = document.querySelectorAll(".square");
    elements.forEach(element => {
        element.style.height = size + "px";
        element.style.width = size + "px";
    })
}

function changeGrid(){
    let gridSize = prompt("Please input the number of squares you want the new grid to have for each side (max 100 per side):")
    removeGrid();
    makeGrid(gridSize);
    const squares = document.querySelectorAll('div');
    squares.forEach(square => {square.addEventListener('mouseover', turnBlack, {
        capture: false,
        once: true
})});
}

function turnBlack(e){
    let element = this.classList.value
    if (element == "square") {
        e.target.classList.add('hover'); 
    } else {
        return
    }
        e.stopPropagation();
}


function removeGrid() {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {square.remove()});
}
