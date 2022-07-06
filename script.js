let gridContainer = document.querySelector('#grid-container');

window.onload = () => {
    let gridElement = document.createElement('div');
    gridElement.style.cssText = "width: 40px;height:40px;flex: 1 0 auto;";
    gridContainer.appendChild(gridElement);
    for(let i = 0; i < 16*16-1; i++){
        gridContainer.appendChild(gridElement.cloneNode(true));
        console.log(i);
    }
}