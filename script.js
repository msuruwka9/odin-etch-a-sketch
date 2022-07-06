let gridContainer = document.querySelector('#grid-container');

const DEFAULT_SIZE = 16;

function createGrid(numOfSquares){
    let gridElement = document.createElement('div');
    gridElement.style.cssText = `width: ${640/numOfSquares}px;height:${640/numOfSquares}px;flex: 1 0 auto;`;
    for(let i = 0; i < numOfSquares*numOfSquares; i++){
        gridElementClone = gridElement.cloneNode(true);
        gridElementClone.addEventListener('mouseover', (e) =>{
            e.target.style.background = 'black';
           });
        gridContainer.appendChild(gridElementClone);
        console.log(i);
    }
}

window.onload = () => {
    createGrid(DEFAULT_SIZE);
}

function updateGrid(){
    let numOfSquares = document.querySelector('#numOfEl').value;
    gridContainer.replaceChildren(); //removes previous children
    createGrid(numOfSquares);
}