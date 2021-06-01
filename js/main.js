//Задача общая
const getRandomInteger = function (min, max) {
  return (min > max || min === max || min < 0) ? 'Указан недопустимый диапазон, число должно быть положительное или равное нулю' : Math.floor(Math.random() * (max - min)) + min;
};

//Задача Кексобукинг
const getRandomNumber = function (min, max, lengthNumber) {
  if (min > max || min === max || min < 0) {
    return 'Указан недопустимый диапазон, число должно быть положительное или равное нулю';
  }
  let randomNumber = Math.random() * (max - min) + min;
  randomNumber = randomNumber.toFixed(lengthNumber);
  return randomNumber;
};

getRandomNumber(2, 9, 5);
getRandomInteger(-3, 99);
