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
        heroNameDisplay.innerHTML = `<b>Your name:</b> ${name}`;
    } else {
        heroNameDisplay.innerHTML = '<b>Your name:</b> (No name entered)';
    }
});

characterNameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const name = characterNameInput.value.trim();
        if (name) {
            heroNameDisplay.innerHTML = `<b>Your name:</b> ${name}`;
        } else {
            heroNameDisplay.innerHTML = '<b>Your name:</b> (No name entered)';
        }
    }
});

function updateAttributes(attributes) {
    strength.innerHTML = `<strong>Strength</strong>: ${attributes.strength}`;
    intelligence.innerHTML = `<strong>Intelligence</strong>: ${attributes.intelligence}`;
    agility.innerHTML = `<strong>Agility</strong>: ${attributes.agility}`;
    health.innerHTML = `<strong>Health</strong>: ${attributes.health}`;
    mana.innerHTML = `<strong>Mana</strong>: ${attributes.mana}`;
    stamina.innerHTML = `<strong>Stamina</strong>: ${attributes.stamina}`;
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
    Warrior: { attributes: { strength: 10, intelligence: 2, agility: 5, health: 15, mana: 3, stamina: 10 }, image: 'resources/images/warrior.png' },
    Mage: { attributes: { strength: 2, intelligence: 10, agility: 4, health: 8, mana: 15, stamina: 5 }, image: 'resources/images/mage.png' },
    Archer: { attributes: { strength: 5, intelligence: 4, agility: 10, health: 10, mana: 5, stamina: 8 }, image: 'resources/images/archer.png' },
    "Warrior Cat": { attributes: { strength: 8, intelligence: 6, agility: 9, health: 12, mana: 7, stamina: 10 }, image: 'resources/images/warrior-cat.png' }
};

const classDescriptions = {
    Warrior: 'The Warrior is a strong melee fighter with high health and stamina.',
    Mage: 'The Mage uses powerful spells and has high intelligence and mana.',
    Archer: 'The Archer is agile and excels at ranged attacks with high agility.',
    "Warrior Cat": 'The Warrior Cat is a balanced fighter with agility and intelligence, excelling in both combat and strategy.'
};

startGameButton.addEventListener('click', (event) => {
    if (playerClass === null || characterName.value.trim() === '') {
        alert('Please select a class and enter a character name before starting the game!');
        event.preventDefault();
    } else {
        alert(`Starting the game as a ${playerClass} ${characterName.value}!`);
        lockClassSelection();
    }
});

//IMAGE SLIDER 

const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId = null;

document.addEventListener('DOMContentLoaded', initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        updateAttributesForSlide(slideIndex);
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        index = 0;
    } else if (index < 0) {
        index = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    slides[index].classList.add("displaySlide");


    const className = slides[index].alt;
    const classNameElement = document.getElementById('class-name');
    classNameElement.textContent = className;

    updateAttributesForSlide(index);
}

function restartInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
    restartInterval();
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
    restartInterval();
}

function updateAttributesForSlide(index) {
    const className = slides[index].alt;
    const selectedClass = classes[className];
    if (selectedClass) {
        updateAttributes(selectedClass.attributes);
        descriptionText.textContent = classDescriptions[className];
    }
}

// you will have will have quiz with 4 answers and if you choose the right one you will get a experience points and if you choose the wrong one you will lose health points and if you lose all your health points you will die and the game will end