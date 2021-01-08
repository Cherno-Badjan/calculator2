import { addClickHandler } from './handlers.js';
const addButton = document.getElementById('add-button');
addButton.addEventListener('click', addClickHandler);

import { subtractClickHandler } from './handlers.js';
const subtractButton = document.getElementById('subtract-button');
subtractButton.addEventListener('click', subtractClickHandler);

import { multiplyClickHandler } from './handlers.js';
const multiplyButton = document.getElementById('multiply-button');
multiplyButton.addEventListener('click', multiplyClickHandler);

import { divideClickHandler } from './handlers.js';
const divideButton = document.getElementById('divide-button');
divideButton.addEventListener('click', divideClickHandler);

/*const multiplyInput = document.getElementById('multiply-input');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyResult = document.getElementById('product');

multiplyButton.addEventListener('click', () => {
    const result = multiplyInput.valueAsNumber * multiplyInput2.valueAsNumber;
    multiplyResult.textContent = result;
})
const divideInput = document.getElementById('divide-input');
const divideInput2 = document.getElementById('divide-input-2');
const divideButton = document.getElementById('divide-button');
const divideResult = document.getElementById('div-answer');

divideButton.addEventListener('click', () => {
    const result = divideInput.valueAsNumber / divideInput2.valueAsNumber;
    divideResult.textContent = result;
})*/