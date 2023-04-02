//create a 16x16 grid of square divs
const container = document.getElementById('container');
/*
i needs to be 272 (256 + 16) because each the 1st, 18th, 35th, etc.
divs are used to line-break instead of serving as an actual square 
in the grid
*/
for (let i = 0; i < 272; i++) {
    let square = document.createElement('div');
    square.className = 'square';
    square.textContent = "";
    square.addEventListener('mouseover', () => {
        square.style.background = 'black';
    })
    container.appendChild(square);
}