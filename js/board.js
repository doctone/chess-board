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
    }
}