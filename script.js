const container = document.getElementById('container');

for (let i = 1; i < 257; i++) {
    let square = document.createElement('div');
    square.className = 'square';
    square.addEventListener('mouseover', () => {
        square.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    })
    container.appendChild(square);
    if (i % 16 === 0) {
        let brk = document.createElement('div');
        brk.className = 'brk';
        container.appendChild(brk);
    }
}

const body = document.getElementsByTagName("body")[0];
const btn = document.createElement('button');
btn.textContent = "New Grid";
body.appendChild(btn);
btn.addEventListener('click', newGrid);

function newGrid() {
    let side = prompt("How many squares per side?");
    if (side <= 100 && side >= 2) {
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }
        for (let i = 1; i < (side * side + 1); i++) {
            let square = document.createElement('div');
            square.className = 'square';
            square.addEventListener('mouseover', () => {
                square.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            })
            container.appendChild(square);
            if (i % side === 0) {
                let brk = document.createElement('div');
                brk.className = 'brk';
                container.appendChild(brk);
            }
        }
    }
    else if (side > 100) {
        alert("Maximum is 100. Try again.");
    }
    else if (side < 2) {
        alert("Minimum is 2. Try again.");
    }
    else {
        alert("Invalid input. Try again.");
    }
}