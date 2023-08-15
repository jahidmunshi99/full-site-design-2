// Humburget Icon For Small Device
const humburgerBtn = document.querySelector("#menu");
const showMenu = document.querySelector("#main-menu");
const humburgerCloseBtn = document.querySelector("#close");


humburgerBtn.addEventListener('click', ()=>{
    showMenu.classList.toggle('active');
    humburgerCloseBtn.classList.add('active');
    humburgerBtn.classList.add('active');
})

humburgerCloseBtn.addEventListener('click', ()=>{
    humburgerBtn.classList.remove('active');
    showMenu.classList.remove('active');
    humburgerCloseBtn.classList.remove('active');
})

// *************************************************************************
//                         For Hero Section Typing Animation
// *************************************************************************

// Text Typing
const dynamicText = document.querySelector("h3 span");
const words = ["WordPress Developer", "Website Designer", "Website Developer", "Theme Customizer"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        // setTimeout(typeEffect, 200);
        setTimeout(typeEffect, 50);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        // setTimeout(typeEffect, 100);
        setTimeout(typeEffect, 50);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();