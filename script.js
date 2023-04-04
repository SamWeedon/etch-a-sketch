const container = document.getElementById('container');

for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.className = 'square';
    square.addEventListener('mouseover', () => {
        square.style.background = 'black';
    })
    container.appendChild(square);
}