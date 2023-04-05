const container = document.getElementById('container');

for (let i = 1; i < 257; i++) {
    let square = document.createElement('div');
    square.className = 'square';
    square.addEventListener('mouseover', () => {
        square.style.background = 'black';
    })
    container.appendChild(square);
    if (i % 16 === 0) {
        let brk = document.createElement('div');
        brk.className = 'brk';
        container.appendChild(brk);
    }
}