let startPosition = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
let sicilian = "r1bqkbnr/pp2pppp/2np4/8/3NP3/8/PPP2PPP/RNBQKB1R w";
let clickedSquare = undefined;
const fenBox = document.getElementById('FEN');
const pieces  = {
    P : "&#9817;",
    p : "&#9823;",
    k : '&#9818;',
    K : '&#9812;',
    q : '&#9819;',
    Q : '&#9813;',
    b : '&#9821;',
    B : '&#9815;',
    r : '&#9820;',
    R : '&#9814;',
    n : '&#9822;',
    N : '&#9816;'
}

function renderPieces(FEN){
    // update current fen input box
    fenBox.value = FEN;
    // create full array
    FEN = FEN
    .split('')
    .map(char => {
        if (Number.isInteger(parseInt(char))) {
            return '-'.repeat(parseInt(char))
        } else {
            return char
        }
    })
    .join('')
    .split('/')

    // render pieces on board
    for (let i=0; i<FEN.length; i++){
        for (let s=0; s<8; s++){
            const pieceImg = FEN[i].split('')[s]
            if (pieces[pieceImg]){
                const square = document.getElementById(`${i}${s}`)
                const piece = document.createElement('h1')
                piece.innerHTML = pieces[pieceImg]
                piece.setAttribute('class','piece')
                square.appendChild(piece)
                } 
            }
        }

    }

const button = document.getElementById('fen-button')
button.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        while(cell.firstChild){
            cell.removeChild(cell.firstChild)
        }
    })

    renderPieces('-')
    const FEN = document.getElementById('FEN').value
    renderPieces(FEN)
})


const cells = document.querySelectorAll('.cell')


cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell == clickedSquare) return null;
        
        if (clickedSquare){
            // put piece down
            console.log('putting piece down ' + clickedSquare.firstChild);
            clickedSquare.classList.remove('clicked');
            if (cell.firstChild){
                cell.removeChild(cell.firstChild);
                cell.appendChild(clickedSquare.firstChild);
            }
            else {
                cell.appendChild(clickedSquare.firstChild);
            }
            clickedSquare = undefined;
        }
        else {
            if(cell.firstChild) {
                clickedSquare = cell;
                console.log('picking piece up ' + clickedSquare.firstChild);
                clickedSquare.classList.add('clicked');
            }
        }
    })
})

renderPieces(startPosition);

// const name = 'Will'
// const age = 15
// const car = {
//     make: "ford",
//     age: 15,
//     model: "fiesta",
//     engine: engineType(),
// }

// car[make]