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

