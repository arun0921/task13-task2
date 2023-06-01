function addToScreen(value) {
    var screen = document.getElementById('screen');
    if (screen.innerHTML === '0') {
        screen.innerHTML = value;
    } else {
        screen.innerHTML += value;
    }
}

function clearScreen() {
    document.getElementById('screen').innerHTML = '0';
}

function calculate() {
    var screen = document.getElementById('screen');
    screen.innerHTML = eval(screen.innerHTML);
}