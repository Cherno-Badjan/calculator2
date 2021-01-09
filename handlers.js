import { getSum, getDifference, getProduct, getDiv } from './utils.js';

//Addition Variables
const addInput = document.getElementById('add-input');
const addInput2 = document.getElementById('add-input-2');
const addResult = document.getElementById('sum');

//Addition Handler
export function addClickHandler() {

    const addValue = addInput.valueAsNumber;
    const addValue2 = addInput2.valueAsNumber;

    const sum = getSum(addValue, addValue2);


    addResult.textContent = sum;
}
//Subtraction Variables
const subtractInput = document.getElementById('subtract-input');
const subtractInput2 = document.getElementById('subtract-input-2');
const subtractResult = document.getElementById('difference');

//Subtraction Handler
export function subtractClickHandler() {

    const subtractValue = subtractInput.valueAsNumber;
    const subtractValue2 = subtractInput2.valueAsNumber;

    const difference = getDifference(subtractValue, subtractValue2);


    subtractResult.textContent = difference;
}

//Multiply Variables
const multiplyInput = document.getElementById('multiply-input');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyResult = document.getElementById('product');

//Multiply Handler
export function multiplyClickHandler() {

    const multiplyValue = multiplyInput.valueAsNumber;
    const multiplyValue2 = multiplyInput2.valueAsNumber;

    const product = getProduct(multiplyValue, multiplyValue2);


    multiplyResult.textContent = product;
}

//Divide Variables
const divideInput = document.getElementById('divide-input');
const divideInput2 = document.getElementById('divide-input-2');
const divideResult = document.getElementById('div-answer');


//Divide Handler
export function divideClickHandler() {

    const divideValue = divideInput.valueAsNumber;
    const divideValue2 = divideInput2.valueAsNumber;

    const div = getDiv(divideValue, divideValue2);


    divideResult.textContent = div;
}