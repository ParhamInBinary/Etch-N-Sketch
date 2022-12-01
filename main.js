function main() {
    addKeyboardListeners();
}

const markerPosition = {
    x: 0,
    y: 0
}

function addKeyboardListeners() {
    document.addEventListener("keydown", moveMarker);
}

function moveMarker(event) {
    const marker = document.querySelector(".marker");
    updateMarkerPosition(event.key);
    setDomMarkerPosition(marker);
    limitMarkerToInnerFrame(marker);
}

function updateMarkerPosition(key) {
    switch(key) {
        case "ArrowRight": {
            markerPosition.x += 2;
            break;
        }
        case "ArrowLeft": {
            markerPosition.x -= 2;
            break;
        }
        case "ArrowUp": {
            markerPosition.y -= 2;
            break;
        }
        case "ArrowDown": {
            markerPosition.y += 2;
            break;
        }
    }
}

function setDomMarkerPosition(marker) {
    marker.style.left = markerPosition.x + "px";
    marker.style.top = markerPosition.y + "px";
}

function limitMarkerToInnerFrame(marker) {
    const innerFrame = document.querySelector(".innerFrame");
    const markerRect = marker.getBoundingClientRect();
    const limitLeft = 0 - markerRect.width;
    const limitRight = innerFrame.innerWidth;
    const limitTop = 0 - markerRect.height;
    const limitBottom = innerFrame.innerHeight;

    if ( markerPosition.x < limitLeft) {
        markerPosition.x + limitRight;
    } else if ( markerPosition.x > limitRight) {
        markerPosition.x = limitLeft;
    }

    if ( markerPosition.y < limitTop) {
        markerPosition.y = limitBottom;
    } else if ( markerPosition.y > limitBottom) {
        markerPosition.y = limitTop;
    }
}