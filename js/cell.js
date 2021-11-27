export default class Cell {
    constructor({rank, file, isOdd, id}){
        this.rank = rank;
        this.file = file;
        this.element = document.createElement("div");
        this.element.classList.add("cell");
        if (!isOdd) {
            this.element.classList.add("odd")
        }
        this.element.setAttribute("data-rank", rank)
        this.element.setAttribute("data-file", file)
        this.element.setAttribute("id", id)
    }
}