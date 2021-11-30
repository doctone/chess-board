let fen = "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR"
let sicilian = "r1bqkbnr/pp2pppp/2np4/8/3NP3/8/PPP2PPP/RNBQKB1R"

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

renderPieces(sicilian)
