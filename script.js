let heads = ["kilicdarkafa", "erdogankafa", "temelkafa", "selahattinkafa"];
let eyes = {
    left: ["kilicdarsolgoz", "bahcelisolgoz", "erdogansolgoz", "meralsolgoz", "temelsolgoz", "selahattinsolgoz"],
    right: ["kilicdarsaggoz", "bahcelisaggoz", "erdogansaggoz", "meralsaggoz", "selahattinsaggoz"]
};
let mouths = ["kilicdaragiz", "bahceliagiz", "erdoganagiz", "meralagiz", "temelagiz", "selahattinagiz"];

let names = {
    first: ["kemal", "recep", "devlet", "selahattin", "doğu", "temel"],
    last: ["bahçedaroğlu", "kılıçdoğan", "erşener", "akdoğan", "aktaş", "perintaş", "bahçeçek", "erçek", "akmollaoğlu", "akmollaşener"]
};

let rand = (range) => {
    return Math.floor(Math.random() * range);
}

let generate = () => {
    document.getElementById("kafa").src = `images/${heads[rand(heads.length)]}.png`;
    document.getElementById("solgoz").src = `images/${eyes.left[rand(eyes.left.length)]}.png`;
    document.getElementById("saggoz").src = `images/${eyes.right[rand(eyes.right.length)]}.png`;
    document.getElementById("agiz").src = `images/${mouths[rand(mouths.length)]}.png`;
    document.getElementById("isim").innerText = `${names.first[rand(names.first.length)]} ${names.last[rand(names.last.length)]}`;
}

window.onload = function () {
    generate();
}

let buttonClick = () => {
    generate();
}