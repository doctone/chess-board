import Cell from "./cell.js";

const files = ['A','B','C','D','E','F','G','H'];

export default class Board {
    constructor({selector, size}) {
        this.size = size;
        this.cells = [];
        this.element = document.querySelector(selector);
        this.element.classList.add('board');
        this.init();

    }

    getCoords(index){
        let coords = [0,0]
        if (index < 8){
            coords[1] = index
            return coords.join('')
        } else {
            coords[1] = index%8
            while(index >= 0){
                index -= 8
                coords[0] += 1
                if (index - 8 < 0) break
            }
        }
        return coords.join('')
    }

    init() {
        if(this.size) {
            this.element.style.width = this.size;
            this.element.style.height = this.size;
        } else {
            const size = '90vmin';
            this.element.style.width = size;
            this.element.style.height = size;
        }

        this.cells = Array.from({length: 64}, (_, index) => {
            const rank = 8 - Math.floor(index / 8);
            const fileNum = index % 8;
            const file = files[fileNum];
            const isOdd = (rank % 2 === fileNum % 2)
            const id = this.getCoords(index)
            const cell = new Cell({
                isOdd,
                rank,
                file,
                id,
            });
            this.element.appendChild(cell.element);
            return cell;
        });
    }
}