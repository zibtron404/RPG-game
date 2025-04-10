const warriorButton = document.getElementById('warrior');
const mageButton = document.getElementById('mage');
const archerButton = document.getElementById('archer');
const characterImage = document.getElementById('character-image');
const startGameButton = document.getElementById('start-game');

let playerClass = null;
const characterName = document.getElementById('character-name');

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

function changeImage(imagePath) {
    characterImage.src = imagePath;
}

function selectClass(className, attributes, imagePath) {
    playerClass = className;
    updateAttributes(attributes);
    changeImage(imagePath);
}

function lockClassSelection() {
    warriorButton.disabled = true;
    mageButton.disabled = true;
    archerButton.disabled = true;
}

warriorButton.addEventListener('click', () => {
    selectClass('Warrior', {
        strength: 10,
        intelligence: 2,
        agility: 5,
        health: 15,
        mana: 0,
        stamina: 10,
        level: 1
    }, 'warrior.png');
});

mageButton.addEventListener('click', () => {
    selectClass('Mage', {
        strength: 2,
        intelligence: 10,
        agility: 4,
        health: 8,
        mana: 15,
        stamina: 5,
        level: 1
    }, 'mage.png');
});

archerButton.addEventListener('click', () => {
    selectClass('Archer', {
        strength: 5,
        intelligence: 4,
        agility: 10,
        health: 10,
        mana: 5,
        stamina: 8,
        level: 1
    }, 'archer.png');
});



startGameButton.addEventListener('click', (event) => {
    if (playerClass === null || characterName.value.trim() === '') {
        alert('Please select a class and enter a character name before starting the game!');
        alert('Please select a class before starting the game!');
        event.preventDefault();
    } else {
        alert(`Starting the game as a ${playerClass} ${characterName.value}!`);
        lockClassSelection();

    }
});