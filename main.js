import { Marker } from "./Marker.js";
const marker = new Marker()
main()

function main() {
    addKeyboardListeners();
    marker.insert();
}


function addKeyboardListeners() {
    document.addEventListener("keydown", moveMarker);
    document.querySelector("input").addEventListener("change", currentSize);
}

function moveMarker(event) {
    marker.move(event.key);
}

function currentSize(event) {
    marker.changeSize(+event.currentTarget.value);
}