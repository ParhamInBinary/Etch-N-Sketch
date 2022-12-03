export function shakeToClear( pressedBtn ) {
    // const shakeBtn = document.querySelector(".shakeBtn");
    if ( pressedBtn == " " ) {
        const outerFrame = document.querySelector(".outerFrame");
        outerFrame.classList.toggle("outerFrameAnimation")

        const drawPad = document.querySelector(".drawPad");
        drawPad.classList.toggle("clearPad")

        setTimeout( function() {
            location.reload();
        }, 1000);
    }
}