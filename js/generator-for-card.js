import {similarAdvertisement} from './create-advertisement.js';

const popupTemplate = document.querySelector('#card').content.querySelector('.popup');
const similarAdvertisements = similarAdvertisement();
const similarListFragment = document.createDocumentFragment();

const getNewOfferType = (type) => {
  let newType;
  switch (type) {
    case 'palace':
      newType = 'Дворец';
      break;
    case 'flat':
      newType = 'Квартира';
      break;
    case 'house':
      newType = 'Дом';
      break;
    case 'bungalow':
      newType = 'Бунгало';
      break;
    case 'hotel':
      newType = 'Отель';
      break;
    default:
      newType = '';
  }
  return newType;
};

const getFeatureCollection = (features) => {
  const element = popupTemplate.cloneNode(true);
  const featureListElement = element.querySelector('.popup__features');
  const modifiers = features.map((feature) => `popup__feature--${feature}`);
  featureListElement.querySelectorAll('.popup__feature').forEach((item) => {
    const featureSecondClass = 1;
    const modifier = item.classList[featureSecondClass];
    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });
  return featureListElement;
};

const getPhotosCollection = (photos) => {
  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const img = document.createElement('img');
    img.setAttribute('src', photo);
    img.setAttribute('width', '45');
    img.setAttribute('height', '40');
    img.setAttribute('alt', 'Фотография жилья');
    fragment.appendChild(img);
  });
  return fragment;
};


similarAdvertisements.forEach((advertisement) => {
  const advertisementElement = popupTemplate.cloneNode(true);
  const photoContainer = advertisementElement.querySelector('.popup__photos');
  advertisementElement.querySelector('.popup__title').textContent = advertisement.offer.title;
  advertisementElement.querySelector('.popup__text--address').textContent = advertisement.offer.address;
  advertisementElement.querySelector('.popup__text--price').innerHTML = `${advertisement.offer.price} <span>₽/ночь</span>`;
  advertisementElement.querySelector('.popup__type').textContent = getNewOfferType(advertisement.offer.type);
  advertisementElement.querySelector('.popup__text--capacity').textContent = `${advertisement.offer.rooms} комнаты для ${advertisement.offer.guests} гостей`;
  advertisementElement.querySelector('.popup__text--time').textContent = `Заезд после ${advertisement.offer.checkIn}, выезд до ${advertisement.offer.checkOut}`;
  advertisementElement.querySelector('.popup__features').textContent = '';
  advertisementElement.querySelector('.popup__features').appendChild(getFeatureCollection(advertisement.offer.features));
  advertisementElement.querySelector('.popup__description').textContent = advertisement.offer.description;
  photoContainer.textContent = '';
  photoContainer.appendChild(getPhotosCollection(advertisement.offer.photos));
  similarListFragment.appendChild(advertisementElement);

});
const cardList = document.querySelector('main');
cardList.appendChild(similarListFragment);


