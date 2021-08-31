export default class Cell {
    constructor({rank, file}){
        this.rank = rank;
        this.file = file;
        this.element = document.createElement("div");
        this.element.classList.add("cell");
        this.element.setAttribute("data-rank", rank)
        this.element.setAttribute("data-file", file)
    }
}