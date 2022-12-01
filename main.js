import { Marker } from "./Marker.js";
const marker = new Marker()
main()

function main() {
    addKeyboardListeners();
    marker.insert();
}


function addKeyboardListeners() {
    document.addEventListener("keydown", moveMarker);
}

function moveMarker(event) {
    marker.move(event.key);
}
