import { Marker } from "./Marker.js";
import { rotateKnob } from "./rotateKnob.js";
const marker = new Marker()
main()

function main() {
    addKeyboardListeners();
    marker.insert();
}


function addKeyboardListeners() {
    document.addEventListener("keydown", (event) => {
        rotateKnob(event.key);
        marker.move(event.key);

    });
    document.querySelector("input").addEventListener("change", currentSize);
}


function currentSize(event) {
    marker.changeSize(+event.currentTarget.value);
}