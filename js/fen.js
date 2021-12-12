// lookup state management
// if the value of 'this' changes, you still need to access the variables

export default class Position {
    constructor() {
        this.state = {
            startPosition: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
            clickedSquare: undefined,
            fenBox: document.getElementById('FEN'),
            fenButton: document.getElementById('fen-button'),
            cells: document.querySelectorAll('.cell'),
            pieces: {
                P: "&#9817;",
                p: "&#9823;",
                k: '&#9818;',
                K: '&#9812;',
                q: '&#9819;',
                Q: '&#9813;',
                b: '&#9821;',
                B: '&#9815;',
                r: '&#9820;',
                R: '&#9814;',
                n: '&#9822;',
                N: '&#9816;'
            },
        }
        this.renderPieces(this.state.startPosition);
        this.state.cells.forEach(cell => {cell.addEventListener('click', this.movePiece)});
        this.state.fenButton.addEventListener('click', this.fillBoard)

    }
    // Make 2d Array
    fillFenArray(FEN) {
        return FEN
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
    }

    renderPieces(FEN) {
        // update current fen input box
        this.state.fenBox.value = FEN;
        // create full array
        FEN = this.fillFenArray(FEN);

        // render pieces on board
        for (let i = 0; i < FEN.length; i++) {
            for (let s = 0; s < 8; s++) {
                const pieceImg = FEN[i].split('')[s]
                if (this.state.pieces[pieceImg]) {
                    const square = document.getElementById(`${i}${s}`)
                    const piece = document.createElement('h1')
                    piece.innerHTML = this.state.pieces[pieceImg]
                    piece.setAttribute('class', 'piece')
                    square.appendChild(piece)
                }
            }
        }

    }


    fillBoard() {
        // clears board
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            while (cell.firstChild) {
                cell.removeChild(cell.firstChild)
            }
        })
        // finding input 
        const FEN = document.getElementById('FEN').value
        renderPieces(FEN)
    }

    // moving piece from square to square
    movePiece(event) {
        const cell = event.target;
        console.log(cell);
    //     // if you click on the same square twice, do nothing
    //     if (cell == this.state.clickedSquare) return null;

    //     if (this.clickedSquare) {
    //         // put piece down
    //         console.log('putting piece down ' + this.clickedSquare.firstChild);
    //         this.clickedSquare.classList.remove('clicked');
    //         if (cell.firstChild) {
    //             cell.removeChild(cell.firstChild);
    //             cell.appendChild(this.clickedSquare.firstChild);
    //         }
    //         else {
    //             cell.appendChild(this.clickedSquare.firstChild);
    //         }
    //         this.clickedSquare = undefined;
    //     }
    //     else {
    //         if (cell.firstChild) {
    //             this.clickedSquare = cell;
    //             console.log('picking piece up ' + this.clickedSquare.firstChild);
    //             this.clickedSquare.classList.add('clicked');
    //         }
    //     }
    // }
    }
}
