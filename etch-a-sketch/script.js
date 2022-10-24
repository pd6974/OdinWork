//variables to help me make the grid
const container = document.querySelector('.container');


//function to build grid onload
function makeGrid() {
    for (let i = 0; i < 256; i++) {
            const gridDiv = document.createElement('div');
            container.appendChild(gridDiv);
            gridDiv.classList.add('gridDiv');
    }
}

//create nodelist of divs in the grid
const divs = document.querySelectorAll('gridDiv');

//add hover event listener to each div
divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        console.log("added");
    });

})


