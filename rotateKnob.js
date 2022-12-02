export function rotateKnob(direction) {
    const YKnob = document.querySelector(".leftKnob");
    const currentRotationYKnob = YKnob.style.transform;
    const rotationNumberYKnob = +currentRotationYKnob.match(/\d/g).join("");
    
    const XKnob = document.querySelector(".rightKnob");
    const currentRotationXKnob = XKnob.style.transform;
    const rotationNumberXKnob = +currentRotationXKnob.match(/\d/g).join("");


    switch(direction) {
        case "ArrowRight": {
            XKnob.style.transform = `rotate(${rotationNumberXKnob + 10}deg)`
            break;
        }
        case "ArrowLeft": {
            XKnob.style.transform = `rotate(${rotationNumberXKnob - 10}deg)`
            break;
        }
        case "ArrowUp": {
            YKnob.style.transform = `rotate(${rotationNumberYKnob - 10}deg)`
            break;
        }
        case "ArrowDown": {
            YKnob.style.transform = `rotate(${rotationNumberYKnob + 10}deg)`
            break;
        }
   }
}