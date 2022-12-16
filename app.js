const color = document.querySelector('#color h1');
const button = document.querySelector('#generator button');
const body = document.querySelector('body');

button.addEventListener('click', () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    color.innerText = `rgb(${red},${blue},${green})`;
    body.style.background = `rgb(${red},${blue},${green})`;
})
