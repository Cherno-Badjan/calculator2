const addInput = document.getElementById('add-input');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('sum');

addButton.addEventListener('click', () => {
    const result = addInput.valueAsNumber + addInput2.valueAsNumber;
    addResult.textContent = result;
})
const subtractInput = document.getElementById('subtract-input');
const subtractInput2 = document.getElementById('subtract-input-2');
const subtractButton = document.getElementById('subtract-button');
const subtractResult = document.getElementById('difference');

subtractButton.addEventListener('click', () => {
    const result = subtractInput.valueAsNumber - subtractInput2.valueAsNumber;
    subtractResult.textContent = result;
})
const multiplyInput = document.getElementById('multiply-input');
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
})