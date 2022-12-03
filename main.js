import { Marker } from "./Marker.js";
import { rotateKnob } from "./rotateKnob.js";
import { SetMarkerSize } from "./SetMarkerSize.js";
import { setMarkerColor } from "./setMarkerColor.js";
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

    document.querySelector(".number").addEventListener("change", (event) => {
        SetMarkerSize(event, marker);
    });

    document.querySelector(".color").addEventListener("change" , (event) => {
        setMarkerColor(event, marker);
    })
}