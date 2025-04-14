const warriorButton = document.getElementById('warrior');
const mageButton = document.getElementById('mage');
const archerButton = document.getElementById('archer');
const characterImage = document.getElementById('character-image');
const startGameButton = document.getElementById('start-game');
let playerClass = null;

const strength = document.getElementById('strength');
const intelligence = document.getElementById('intelligence');
const agility = document.getElementById('agility');
const health = document.getElementById('health');
const mana = document.getElementById('mana');
const stamina = document.getElementById('stamina');
const level = document.getElementById('level');
const name = document.getElementById('hero-name');
const confirmNameButton = document.getElementById('confirm-name');
const characterNameInput = document.getElementById('character-name');
const heroNameDisplay = document.getElementById('hero-name');
const descriptionText = document.getElementById('description-text');

confirmNameButton.addEventListener('click', () => {
    const name = characterNameInput.value.trim();
    if (name) {
        heroNameDisplay.textContent = `Name: ${name}`;
    }
    else {
        heroNameDisplay.textContent = 'Name: (No name entered)';
    }
});

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
    document.querySelectorAll('.class-button').forEach(button => {
        button.disabled = true;
    });
}

const classes = {
    Warrior: { attributes: { strength: 10, intelligence: 2, agility: 5, health: 15, mana: 0, stamina: 10, level: 1 }, image: 'warrior.png' },
    Mage: { attributes: { strength: 2, intelligence: 10, agility: 4, health: 8, mana: 15, stamina: 5, level: 1 }, image: 'mage.png' },
    Archer: { attributes: { strength: 5, intelligence: 4, agility: 10, health: 10, mana: 5, stamina: 8, level: 1 }, image: 'archer.png' }
};

const classDescriptions = {
    Warrior: 'The Warrior is a strong melee fighter with high health and stamina.',
    Mage: 'The Mage uses powerful spells and has high intelligence and mana.',
    Archer: 'The Archer is agile and excels at ranged attacks with high agility.'
};

Object.keys(classes).forEach(className => {
    document.getElementById(className.toLowerCase()).addEventListener('click', () => {
        const { attributes, image } = classes[className];
        selectClass(className, attributes, image);
        descriptionText.textContent = classDescriptions[className];
    });
});

startGameButton.addEventListener('click', (event) => {
    if (playerClass === null || characterName.value.trim() === '') {
        alert('Please select a class and enter a character name before starting the game!');
        event.preventDefault();
    } else {
        alert(`Starting the game as a ${playerClass} ${characterName.value}!`);
        lockClassSelection();
    }
});
 // you will have will have quiz with 4 answers and if you choose the right one you will get a experience points and if you choose the wrong one you will lose health points and if you lose all your health points you will die and the game will end