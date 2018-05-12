let heads = ["kilicdarkafa", "erdogankafa"];
let eyes = {
    left: ["kilicdarsolgoz", "bahcelisolgoz", "erdogansolgoz", "meralsolgoz"],
    right: ["kilicdarsaggoz", "bahcelisaggoz", "erdogansaggoz", "meralsaggoz"]
};
let mouths = ["kilicdaragiz", "bahceliagiz", "erdoganagiz", "meralagiz"];

let rand = (range) => {
    return Math.floor(Math.random() * range);
}

let generate = () => {
    document.getElementById("kafa").src = `images/${heads[rand(heads.length)]}.png`;
    document.getElementById("solgoz").src = `images/${eyes.left[rand(eyes.left.length)]}.png`;
    document.getElementById("saggoz").src = `images/${eyes.right[rand(eyes.right.length)]}.png`;
    document.getElementById("agiz").src = `images/${mouths[rand(mouths.length)]}.png`;
}

window.onload = function() {
   generate();
}

let buttonClick = () => {
    generate();
}