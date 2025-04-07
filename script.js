const warriorButton = document.getElementById('warrior');
const mageButton = document.getElementById('mage');
const archerButton = document.getElementById('archer');
const characterImage = document.getElementById('character-image');

const strength = document.getElementById('strength');
const intelligence = document.getElementById('intelligence');
const agility = document.getElementById('agility');
const health = document.getElementById('health');
const mana = document.getElementById('mana');
const stamina = document.getElementById('stamina');
const level = document.getElementById('level');

function updateAttributes(attributes) {
    strength.innerHTML = `<strong>Strength</strong>: ${attributes.strength}`;
    intelligence.innerHTML = `<strong>Intelligence</strong>: ${attributes.intelligence}`;
    agility.innerHTML = `<strong>Agility</strong>: ${attributes.agility}`;
    health.innerHTML = `<strong>Health</strong>: ${attributes.health}`;
    mana.innerHTML = `<strong>Mana</strong>: ${attributes.mana}`;
    stamina.innerHTML = `<strong>Stamina</strong>: ${attributes.stamina}`;
    level.innerHTML = `<strong>Level</strong>: ${attributes.level}`;
}

// Funkcia na zmenu obrázka
function changeImage(imagePath) {
    characterImage.src = imagePath; // Nastaví cestu k obrázku
    characterImage.style.display = 'block'; // Zobrazí obrázok, ak bol skrytý
}

warriorButton.addEventListener('click', () => {
    updateAttributes({
        strength: 10,
        intelligence: 2,
        agility: 5,
        health: 15,
        mana: 0,
        stamina: 10,
        level: 1
    });
    changeImage('warrior.png'); // Cesta k obrázku bojovníka
});

mageButton.addEventListener('click', () => {
    updateAttributes({
        strength: 2,
        intelligence: 10,
        agility: 4,
        health: 8,
        mana: 15,
        stamina: 5,
        level: 1
    });
    changeImage('mage.png'); // Cesta k obrázku mága
});

archerButton.addEventListener('click', () => {
    updateAttributes({
        strength: 5,
        intelligence: 4,
        agility: 10,
        health: 10,
        mana: 5,
        stamina: 8,
        level: 1
    });
    changeImage('archer.png'); // Cesta k obrázku lukostrelca
});