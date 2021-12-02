const startPosition = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
const pieces  = {
    p : "../img/icons8-pawn-90 (1).png",
    P : "../img/icons8-pawn-90.png",
    K : '',
    k : '',
    Q : '',
    q : '',
    B : '',
    b : '',
    R : '../img/white rook.png',
    r : '../img/blackrook.png',
    N : '',
    n : ''
}

function renderPieces(FEN){
    let fenArr = FEN.split('/');
    console.log(fenArr);
    for (let i=0; i<fenArr.length; i++){
        for (let s=0; s<8; s++){
            const pieceImg = fenArr[i].split('')[s]
            if (pieces[pieceImg]){
                const square = document.getElementById(`${i}${s}`)
                const piece = document.createElement('img')
                piece.setAttribute('src',pieces[pieceImg])
                piece.setAttribute('class','pawn')
                square.appendChild(piece)
                console.log(`found a pawn on ${i}${s}`);
            }
        }
    }

}

renderPieces(startPosition)
