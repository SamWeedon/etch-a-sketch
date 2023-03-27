//create a 16x16 grid of square divs
const container = document.querySelector('container');
for (let i = 0; i < 16; i++) {
    const square = document.createElement('div');
    container.appendChild(square);
}