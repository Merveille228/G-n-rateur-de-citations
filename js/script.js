let content = [
    "coucou",
    "it's me",
    "aude est un fou",
    "gildas un mito"
];

let btn = document.querySelector("button");
let texte = document.getElementById("content");

btn.addEventListener("click", function() {
    let index = Math.floor(Math.random() * content.length);
    texte.textContent = content[index];
});