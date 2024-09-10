
function clearDisplay() {
    document.forms[0].display.value = '';
}


function deleteLastCharacter() {
    let display = document.forms[0].display;
    display.value = display.value.toString().slice(0, -1);
}
``

function appendCharacter(character) {
    document.forms[0].display.value += character;
}

function calculateResult() {
    let display = document.forms[0].display;
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
