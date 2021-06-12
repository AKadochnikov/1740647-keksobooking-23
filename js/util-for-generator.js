import {getRandomPositiveInteger} from './utils/get-random-positive-integer.js';

const ALL_SYMBOLS = '0123456789qwertyuiopasdfghjklzxcvbnm';

const createCurrentElement = (array, index) => {
  const currentElement = array[index];
  array.splice(index,1);
  return currentElement;
};

const createRandomString = (element, length) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += element[getRandomPositiveInteger(0, element.length - 1)];
  }
  return result;
};

const createRandomPhotosArray = (index) => {
  const photos = [
    `https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-${createRandomString(ALL_SYMBOLS, getRandomPositiveInteger(0, ALL_SYMBOLS.length))}.jpg`,
    `https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-${createRandomString(ALL_SYMBOLS, getRandomPositiveInteger(0, ALL_SYMBOLS.length))}.jpg`,
    `https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-${createRandomString(ALL_SYMBOLS, getRandomPositiveInteger(0, ALL_SYMBOLS.length))}.jpg`,
  ];
  const photosArray = [];
  for (let i = 0; i <= index - 1; i++){
    photosArray.push(photos[getRandomPositiveInteger(0, photos.length - 1)]);
  }
  return photosArray;
};

const createRandomArrayFeatures = (array, index) => array.slice(index);

export {createCurrentElement, createRandomPhotosArray, createRandomArrayFeatures};
