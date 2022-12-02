export function SetMarkerSize(event, marker) {
    const ChosenMarkerSize = document.querySelector("input");
    if ( ChosenMarkerSize.value > 64 ) {
        ChosenMarkerSize.value = 64;
    }
    if ( ChosenMarkerSize.value < 1 ) {
        ChosenMarkerSize.value = 1
    }
    marker.changeSize(+event.currentTarget.value);
}