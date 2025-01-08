document.addEventListener('DOMContentLoaded', () => {
const laptop = document.getElementById('laptop');

    // Mouse move effect on laptop
    laptop.addEventListener('mousemove', (event) => {
    const xAxis = (window.innerWidth / 2 - event.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - event.pageY) / 25;
    laptop.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

    // Reset laptop position on mouse out
    laptop.addEventListener('mouseout', () => {
    laptop.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

    // Color change buttons
    const Midnight = document.getElementById('toMid');
    const Silver = document.getElementById('toSil');
    const Gold = document.getElementById('toGold');
    const Rose = document.getElementById('toRose');

    Midnight.addEventListener('click', colorMid);
    Silver.addEventListener('click', colorSil);
    Gold.addEventListener('click', colorGold);
    Rose.addEventListener('click', colorRose);

    // Backlight change buttons
    const RGB = document.getElementById('backRGB');
    const White = document.getElementById('backWhite');
    const Red = document.getElementById('backRed');
    const Green = document.getElementById('backGreen');
    const Blue = document.getElementById('backBlue');

    RGB.addEventListener('click', backlightRGB);
    White.addEventListener('click', backlightWhite);
    Red.addEventListener('click', backlightRed);
    Green.addEventListener('click', backlightGreen);
    Blue.addEventListener('click', backlightBlue);
});

// Apply smooth transitions to elements
function applySmoothTransition(element) {
    element.style.transition = 'background 0.5s ease, transform 0.5s ease';
}

// Change color function
function changeColor(baseColor, keyboardColor, screenColor, trackpadColor) {
    const base = document.getElementById('base');
    const keyboard = document.getElementById('keyboard');
    const screen = document.getElementById('screen');
    const trackpad = document.getElementById('trackpad');

    applySmoothTransition(base);
    applySmoothTransition(keyboard);
    applySmoothTransition(screen);
    applySmoothTransition(trackpad);

    base.style.background = `linear-gradient(135deg, ${baseColor[0]}, ${baseColor[1]})`;
    keyboard.style.background = `linear-gradient(135deg, ${keyboardColor[0]}, ${keyboardColor[1]})`;
    screen.style.background = `linear-gradient(135deg, ${screenColor[0]}, ${screenColor[1]})`;
    trackpad.style.background = `linear-gradient(135deg, ${trackpadColor[0]}, ${trackpadColor[1]})`;
}

// Color change functions
function colorMid() {
    changeColor(['#1a1a1a', '#28282B'], ['#1a1a1a', '#28282B'], ['#1a1a1a', '#28282B'], ['#1a1a1a', '#28282B'],);
}

function colorSil() {
    changeColor(['#a0a0a0', '#c0c0c0'], ['#a0a0a0', '#c0c0c0'], ['#a0a0a0', '#c0c0c0'], ['#a0a0a0', '#c0c0c0'], );
}

function colorPink() {
    changeColor(['#ceada9', '#ebc5c0'], ['#ceada9', '#ebc5c0'], ['#ceada9', '#ebc5c0'], ['#ceada9', '#ebc5c0']);
}


// Backlight change function
function changeBacklight(colorClass) {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        key.classList.remove('backlight-rgb', 'backlight-white', 'backlight-red', 'backlight-green', 'backlight-blue', 'backlight-pink', 'no-backlight');
        key.classList.add(colorClass);
    });
}

// Backlight change functions
function backlightRGB() {
    changeBacklight('backlight-rgb');
}

function backlightWhite() {
    changeBacklight('backlight-white');
}

function backlightRed() {
    changeBacklight('backlight-red');
}

function backlightGreen() {
    changeBacklight('backlight-green');
}

function backlightBlue() {
    changeBacklight('backlight-blue');
}

function backlightRosePink() {
    changeBacklight('backlight-pink');
}

function nobacklight() {
    changeBacklight('no-backlight')
}