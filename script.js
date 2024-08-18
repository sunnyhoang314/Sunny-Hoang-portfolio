function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const texts = ["Undergraduate at the University of Calgary", "A programming enthusiast", "A fullstack developer"];
let currentTextIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTexts = 2000; // Delay between texts

const typingTextElement = document.getElementById("typing-text");

function type() {
    if (charIndex < texts[currentTextIndex].length) {
        typingTextElement.textContent += texts[currentTextIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenTexts);
    }
}

function erase() {
    if (charIndex > 0) {
        typingTextElement.textContent = texts[currentTextIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, delayBetweenTexts);
});
