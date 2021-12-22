const board = document.querySelector('#board')
const colors = ['#56E89F', '#7E72DB', '#DB4E46', '#3EA9DB', '#DBA732', '#AF1DDB', '#73148F', '#DB4E39']
const SQUARES_NUMBER = 700 

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` //Обратные скобки позволяют добавлять динамическое значение в CSS
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
   const index =  Math.floor(Math.random() * colors.length)

   return colors[index]
}