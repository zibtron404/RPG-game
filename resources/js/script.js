const warriorButton = document.getElementById('warrior');
const mageButton = document.getElementById('mage');
const archerButton = document.getElementById('archer');
const characterImage = document.getElementById('character-image');
const startGameButton = document.getElementById('start-game');
let playerClass = null;

const strength = document.getElementById('strength');
const wisdom = document.getElementById('wisdom');
const agility = document.getElementById('agility');
const health = document.getElementById('health');
const dexterity = document.getElementById('dexterity');
const charisma = document.getElementById('charisma');
const mana = document.getElementById('mana');
const stamina = document.getElementById('stamina');
const level = document.getElementById('level');
const name = document.getElementById('hero-name');
const confirmNameButton = document.getElementById('confirm-name');
const characterNameInput = document.getElementById('character-name');
const heroNameDisplay = document.getElementById('hero-name');
const descriptionText = document.getElementById('description-text');
const healthValue = document.getElementById('health-value');


confirmNameButton.addEventListener('click', () => {
    const name = characterNameInput.value.trim();
    if (name) {
        heroNameDisplay.innerHTML = `<b>Your name:</b> ${name}`;
        characterNameInput.remove();
        confirmNameButton.remove();
    } else {
        heroNameDisplay.innerHTML = '<b>Your name:</b> (No name entered)';
    }
});

characterNameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const name = characterNameInput.value.trim();
        if (name) {
            heroNameDisplay.innerHTML = `<b>Your name:</b> ${name}`;
            characterNameInput.remove();
            confirmNameButton.remove();
        } else {
            heroNameDisplay.innerHTML = '<b>Your name:</b> (No name entered)';
        }
    }
});

function updateAttributes(attributes) {
    strength.innerHTML = `<strong>Strength</strong>: ${attributes.strength}`;
    wisdom.innerHTML = `<strong>Wisdom</strong>: ${attributes.wisdom}`;
    agility.innerHTML = `<strong>Agility</strong>: ${attributes.agility}`;
    dexterity.innerHTML = `<strong>Dexterity</strong>: ${attributes.dexterity}`;
    charisma.innerHTML = `<strong>Charisma</strong>: ${attributes.charisma}`;
    healthValue.textContent = attributes.health; 
}

function changeImage(imagePath) {
    characterImage.src = imagePath;
}

function selectClass(className, attributes, imagePath) {
    playerClass = className;
    updateAttributes(attributes);
    changeImage(imagePath);
}

const classes = {
    Warrior: { attributes: { strength: 10, wisdom: 2, agility: 5, dexterity: 4, charisma: 3, health: 15 }, image: 'resources/images/warrior.png' },
    Mage: { attributes: { strength: 2, wisdom: 10, agility: 4, dexterity: 5, charisma: 8, health: 8 }, image: 'resources/images/mage.png' },
    Archer: { attributes: { strength: 5, wisdom: 4, agility: 10, dexterity: 10, charisma: 6, health: 10 }, image: 'resources/images/archer.png' },
    "Warrior Cat": { attributes: { strength: 8, wisdom: 6, agility: 9, dexterity: 8, charisma: 7, health: 12 }, image: 'resources/images/warrior-cat.png' }
};


startGameButton.addEventListener('click', (event) => {
    const currentClassName = slides[slideIndex].alt; 
    const characterNameValue = characterNameInput.value.trim(); 

    if (!currentClassName || characterNameValue === '') {
        alert('Please select a class and enter a character name before starting the game!');
        event.preventDefault();
    } else {
        alert(`Starting the game as a ${currentClassName} named ${characterNameValue}!`);
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
    const classNameElements = document.getElementsByClassName('class-name');
    for (let el of classNameElements) {
        el.textContent = className;
    }

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