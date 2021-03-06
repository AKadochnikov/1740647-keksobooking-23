const popupTemplate = document.querySelector('#card').content.querySelector('.popup');

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

const getFeatureCollection = (features, featureListElement) => {
  if (features) {
    const modifiers = features.map((feature) => `popup__feature--${feature}`);
    featureListElement.querySelectorAll('.popup__feature').forEach((item) => {
      const featureSecondClass = 1;
      const modifier = item.classList[featureSecondClass];
      if (!modifiers.includes(modifier)) {
        item.remove();
      }
    });
  } else {
    featureListElement.querySelectorAll('.popup__feature')
      .forEach((item) => item.remove());
    featureListElement.classList.add('hidden');
  }
  return featureListElement;
};

const getPhotosCollection = (photos, container) => {
  const fragment = document.createDocumentFragment();
  if (photos) {
    photos.forEach((photo) => {
      const img = document.createElement('img');
      img.setAttribute('src', photo);
      img.setAttribute('width', '45');
      img.setAttribute('height', '40');
      img.setAttribute('alt', 'Фотография жилья');
      fragment.appendChild(img);
    });
  } else {
    container.classList.add('hidden');
  }
  return fragment;
};

const checkContent = (elements) => {
  if (elements.textContent === '') {
    elements.classList.add('hidden');
  }
  return elements;
};

const getGeneratedCard = (advertisement) => {
  const advertisementElement = popupTemplate.cloneNode(true);
  const photoContainer = advertisementElement.querySelector('.popup__photos');
  const popupTittle = advertisementElement.querySelector('.popup__title');
  const popupTextAddress = advertisementElement.querySelector('.popup__text--address');
  const popupTextPrice = advertisementElement.querySelector('.popup__text--price');
  const popupType = advertisementElement.querySelector('.popup__type');
  const popupTextCapacity = advertisementElement.querySelector('.popup__text--capacity');
  const popupTextTime = advertisementElement.querySelector('.popup__text--time');
  const popupFeatures = advertisementElement.querySelector('.popup__features');
  const popupDescription = advertisementElement.querySelector('.popup__description');
  const popupAvatar = advertisementElement.querySelector('.popup__avatar');
  popupTittle.textContent = advertisement.offer.title;
  popupTextAddress.textContent = advertisement.offer.address;
  popupTextPrice.innerHTML = `${advertisement.offer.price} <span>₽/ночь</span>`;
  popupType.textContent = getNewOfferType(advertisement.offer.type);
  popupTextCapacity.textContent = `${advertisement.offer.rooms} комнаты для ${advertisement.offer.guests} гостей`;
  popupTextTime.textContent = `Заезд после ${advertisement.offer.checkin}, выезд до ${advertisement.offer.checkout}`;
  getFeatureCollection(advertisement.offer.features, popupFeatures);
  popupDescription.textContent = advertisement.offer.description;
  photoContainer.textContent = '';
  photoContainer.appendChild(getPhotosCollection(advertisement.offer.photos, photoContainer));
  popupAvatar.src = advertisement.author.avatar;
  checkContent(popupTittle);
  checkContent(popupTextAddress);
  checkContent(popupTextPrice);
  checkContent(popupType);
  checkContent(popupTextCapacity);
  checkContent(popupTextTime);
  checkContent(popupDescription);
  return advertisementElement;
};

export {getGeneratedCard};

