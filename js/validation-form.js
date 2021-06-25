import './sync-guests-rooms.js';
const title = document.querySelector('#title');
const price = document.querySelector('#price');

const getMinValue = (item) => {
  let minValue;
  if(item['type'] === 'number'){
    minValue = item['min'];
  } else if (item['type'] === 'text'){
    minValue = item['minLength'];
  }
  return minValue;
};

const getMaxValue = (item) => {
  let maxValue;
  if (item['type'] === 'number'){
    maxValue = item['max'];
  } else if (item['type'] === 'text'){
    maxValue = item['maxLength'];
  }
  return maxValue;
};


const checkValidation = (item) => {
  const minValue = getMinValue(item);
  const maxValue = getMaxValue(item);

  item.addEventListener('input', () => {
    if (item['type'] === 'number') {
      const value = Number(item.value);

      if (value < minValue) {
        item.setCustomValidity('Минимальное значение 0');
      } else if (value > maxValue) {
        item.setCustomValidity('Максимальное значение 1 000 000');
      } else {
        item.setCustomValidity('');
      }
    } else if (item['type'] === 'text') {
      const valueLength = item.value.length;
      if (valueLength < minValue) {
        item.setCustomValidity(`Ещё ${ minValue - valueLength } симв.`);
      } else if (valueLength > maxValue) {
        item.setCustomValidity(`Удалите лишние ${ valueLength - maxValue } симв.`);
      } else {
        item.setCustomValidity('');
      }
    }
    item.reportValidity();
  });
  return item;
};

checkValidation(title);
checkValidation(price);
