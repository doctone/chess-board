const startPosition = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
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
    let fenArr = FEN.split('/');
    console.log(fenArr);
    for (let i=0; i<fenArr.length; i++){
        for (let s=0; s<8; s++){
            const pieceImg = fenArr[i].split('')[s]
            if (pieces[pieceImg]){
                const square = document.getElementById(`${i}${s}`)
                const piece = document.createElement('h1')
                piece.innerHTML = pieces[pieceImg]
                piece.setAttribute('class','piece')
                square.appendChild(piece)
                console.log(`found a pawn on ${i}${s}`);
            }
        }
    }

}

renderPieces(startPosition)
