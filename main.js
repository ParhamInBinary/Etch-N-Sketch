import { Marker } from "./Marker.js";
import { rotateKnob } from "./rotateKnob.js";
import { SetMarkerSize } from "./SetMarkerSize.js";
const marker = new Marker();
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

    document.querySelector("input").addEventListener("change", (event) => {
        SetMarkerSize(event, marker);
    });
}