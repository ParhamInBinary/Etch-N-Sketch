export class Marker {
    positionX = 0;
    positionY = 0;
    color = "black";
    size = 4;
    positionXLimit = document.querySelector(".drawPad").offsetWidth
    positionYLimit = document.querySelector(".drawPad").offsetHeight
    markerElement = document.createElement("div");

    constructor() {
        this.markerElement.style.position = "relative";
        this.markerElement.style.left = this.positionX;
        this.markerElement.style.top = this.positionY;
        this.markerElement.style.backgroundColor = this.color;
        this.markerElement.style.width = this.size + "px";
        this.markerElement.style.height = this.size + "px";

    }
    
    insert() {
        const drawPad = document.querySelector(".drawPad");
        drawPad.append(this.markerElement)
    }

    move(key) {
        switch(key) {
            case "ArrowRight": {
                this.positionX += this.size;
                this.markerElement.style.left = this.positionX + "px";
                break;
            }
            case "ArrowLeft": {
                this.positionX -= this.size;
                this.markerElement.style.left = this.positionX + "px";
                break;
            }
            case "ArrowUp": {
                this.positionY -= this.size;
                this.markerElement.style.top = this.positionY + "px";
                break;
            }
            case "ArrowDown": {
                this.positionY += this.size;
                this.markerElement.style.top = this.positionY + "px";
                break;
            }
        }
    }
}