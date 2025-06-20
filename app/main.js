const board = document.querySelector('#board');
const SQUARES_NUMBER = 200;

const colors = ['red','#f2d2b3','green','yellow', 'purple']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    board.append(square)

square.addEventListener('mouseover', setColor)

square.addEventListener('mouseleave', removeColor)
}

function setColor(event) {
    const element = event.target
    const color = getColor();
    element.style.background = color;
    element.style.boxShadow =`0 0 2px ${color}, 00 1px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.background="#202020"
    element.style.boxShadow =`0 0 2px #202020`
}

function getColor() {
   return colors[Math.floor(Math.random() * colors.length)]
}
