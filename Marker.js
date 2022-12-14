export class Marker {
    positionX = 0;
    positionY = 0;
    color = "black";
    size = 4;
    positionXLimit = document.querySelector(".drawPad").offsetWidth;
    positionYLimit = document.querySelector(".drawPad").offsetHeight;
    markerElement = document.createElement("div");
    markerRect = this.markerElement.getBoundingClientRect();

    constructor() {
        this.markerElement.style.display = "inline-block";
        this.markerElement.style.position = "absolute";
        this.markerElement.style.left = this.positionX;
        this.markerElement.style.top = this.positionY;
        this.markerElement.style.backgroundColor = this.color;
        this.markerElement.style.width = this.size + "px";
        this.markerElement.style.height = this.size + "px";
    }
    
    insert() {
        const drawPad = document.querySelector(".drawPad");
        drawPad.append(this.markerElement);
    }

    move( direction ) {
        if ( this.isMovingOutOfBounds( direction )) {
            return
        }
        this.leaveTrail();
        switch( direction ) {
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

    isMovingOutOfBounds( direction ) {
        switch( direction ) {
            case "ArrowRight": {
                if ( this.positionX + this.size > this.positionXLimit - this.size ) {
                    return true;
                }
                break;
            }
            case "ArrowLeft": {
                if ( this.positionX - this.size < 0 ) {
                    return true;
                }
                break;
            }
            case "ArrowUp": {
                if ( this.positionY - this.size < 0 ) {
                    return true;
                }
                break;
            }
            case "ArrowDown": {
                if ( this.positionY + this.size > this.positionYLimit - this.size) {
                    return true;
                }
                break;
            }
        }
        return false;
    }

    changeSize( size ) {
        
        this.size = size;
        this.markerElement.style.width = this.size + "px";
        this.markerElement.style.height = this.size + "px";
    }

    changeColor ( color ) {
        this.color = color;
        this.markerElement.style.backgroundColor = this.color;
    }

    leaveTrail() {
        const clone = this.markerElement.cloneNode(true);
        const drawPad = document.querySelector(".drawPad");
        drawPad.append(clone);
    }
}