import Cell from "./cell.js";

const files = ['A','B','C','D','E','F','G','H'];

export default class Board {
    constructor({selector, size}) {
        this.size = size;
        this.cells = [];
        this.element = document.querySelector(selector);
        this.element.classList.add('board');
        this.init();
        console.log(this.element)

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
            const rank = Math.ceil(index / 8);
            const file = files[index % 8];
            const cell = new Cell({
                rank,
                file,
            });
            this.element.appendChild(cell.element);
            return cell;
        });
    }
}