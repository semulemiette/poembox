const poems = [
    ["Un matin calme", "Les oiseaux chantent doucement", "La rosée scintille."],
    ["Sous la pleine lune", "Les gobelins dansent joyeusement", "Mystère nocturne."],
    ["Dans la forêt dense", "Un souffle de vent léger", "Les feuilles murmurent."],
    ["L'océan rugit", "Les étoiles observent", "Un instant paisible."]
];

document.getElementById("generate-poem").addEventListener("click", () => {
    const randomPoem = poems[Math.floor(Math.random() * poems.length)];
    document.getElementById("poem-output").innerHTML = randomPoem.join("<br>");
});
