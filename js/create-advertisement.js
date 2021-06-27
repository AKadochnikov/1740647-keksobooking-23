import {getRandomPositiveFloat} from './utils/get-random-positive-float.js';
import {getRandomPositiveInteger} from './utils/get-random-positive-integer.js';
import {createCurrentElement, createRandomPhotosArray, createRandomArrayFeatures} from './util-for-generator.js';

const MAX_PHOTOS = 5;
const LAT_MIN = 35.65;
const LAT_MAX = 35.70;
const LNG_MIN = 139.7;
const LNG_MAX = 139.8;
const DIGIT = 5;

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

const createAdvertisement = () => ({
  author : {
    avatar: `img/avatars/user${ createCurrentElement(NUMBERS_FOR_URL, getRandomPositiveInteger(0, NUMBERS_FOR_URL.length - 1)) }.png`,
  },
  offer: {
    title: TITLES[getRandomPositiveInteger(0, TITLES.length - 1)],
    address: `${getRandomPositiveFloat(LAT_MIN, LAT_MAX, DIGIT)}.x ${getRandomPositiveFloat(LNG_MIN, LNG_MAX, DIGIT)}.y`,
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
    lat: getRandomPositiveFloat(LAT_MIN, LAT_MAX, DIGIT),
    lng: getRandomPositiveFloat(LNG_MIN, LNG_MAX, DIGIT),
  },
});

const similarAdvertisement = () => new Array(8).fill(null).map(() => createAdvertisement());

export {similarAdvertisement, DIGIT};
