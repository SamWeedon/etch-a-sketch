//create a 16x16 grid of square divs
const container = document.getElementById('container');
for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.className = 'square';
    square.textContent = "o";
    container.appendChild(square);
}