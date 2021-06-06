const ALL_SYMBOLS = '0123456789qwertyuiopasdfghjklzxcvbnm';
const MAX_PHOTOS = 100;

const NUMBERS_FOR_URL = ['01', '02', '03', '04', '05', '06', '07', '08'];
const TITLES = [
  'Уютный дворик',
  'Отель Арго',
  'Mini Hotel',
  'Absolut',
  'Melnitsa Mini-Hotel',
  'Holiday Home',
  'Atlantis Hotel',
  'Ace',
];
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const CHECKS = [
  '12:00',
  '13:00',
  '14:00',
];
const ALL_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const DESCRIPTIONS = [
  'Во всех номерах есть шкаф, телевизор, собственная ванная комната и холодильник.',
  'Это любимая часть города среди наших гостей согласно независимым отзывам.',
  'К услугам гостей бар и терраса.',
  'Все номера оснащены кондиционером, телевизором со спутниковыми каналами, микроволновой печью, чайником, душем, феном и шкафом.',
  'В собственной ванной комнате предоставляются бесплатные туалетно-косметические принадлежности.',
];

const getRandomPositiveFloat = (min, max, digits = 1) => {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
};

const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createElement = (array, index) => {
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

const createAdvertisement = () => (
  { author : {
    avatar: `img/avatars/user${ createElement(NUMBERS_FOR_URL, getRandomPositiveInteger(0, NUMBERS_FOR_URL.length - 1)) }.png`,
  },
  offer: {
    title:  TITLES[getRandomPositiveInteger(0, TITLES.length - 1)],
    address: `${getRandomPositiveFloat(35.65, 35.70, 5)}.x ${getRandomPositiveFloat(139.7, 139.8, 5)}.y`,
    price: getRandomPositiveInteger(1, 40000),
    type: TYPES[getRandomPositiveInteger(0, TYPES.length - 1)],
    rooms: getRandomPositiveInteger(1, 5),
    guests: getRandomPositiveInteger(1,10),
    checkIn: CHECKS[getRandomPositiveInteger(0, CHECKS.length - 1)],
    checkOut: CHECKS[getRandomPositiveInteger(0, CHECKS.length - 1)],
    features: createRandomArrayFeatures(ALL_FEATURES, getRandomPositiveInteger(1, ALL_FEATURES.length - 1)),
    description: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)],
    photos: createRandomPhotosArray(getRandomPositiveInteger(1, MAX_PHOTOS)),
  },
  location: {
    lat: getRandomPositiveFloat(35.65, 35.70, 5),
    lng: getRandomPositiveFloat(139.7, 139.8, 5),
  },
  });

const similarAdvertisement = new Array(8).fill(null).map(() => createAdvertisement());

console.log(similarAdvertisement);
