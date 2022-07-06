let gridContainer = document.querySelector('#grid-container');
window.onload = () => {
    let gridElement = document.createElement('div');
    gridElement.style.cssText = "width: 40px;height:40px;flex: 1 0 auto;";
    for(let i = 0; i < 16*16; i++){
        gridElementClone = gridElement.cloneNode(true);
        gridElementClone.addEventListener('mouseover', (e) =>{
            e.target.style.background = 'black';
           });
        gridContainer.appendChild(gridElementClone);
        console.log(i);
    }
}