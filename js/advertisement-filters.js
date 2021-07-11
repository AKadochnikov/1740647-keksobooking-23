import {mapFilters} from './state-of-form.js';

const filtersSelects = mapFilters.querySelectorAll('select');
const filterInputs = mapFilters.querySelectorAll('input');


const getFeaturesArray = () => {
  const featuresArray = [];
  filterInputs.forEach((filter) => {
    const value = filter.getAttribute('value');
    if (filter.checked) {
      featuresArray.push(value);
    }
  });
  return featuresArray;
};

const getSelectsObj = () => {
  const selectsObj = {};
  filtersSelects.forEach((select) => {
    const name = select.getAttribute('name');
    const value = select.value;
    if (value !== 'any') {
      selectsObj[name] = value;
    }
  });
  return selectsObj;
};

const getRank = (advertisement) => {
  const featureList = getFeaturesArray();
  const selectList = getSelectsObj();
  let rank = 0;
  const advertisementFeatures = advertisement.offer.features;
  if (advertisementFeatures !== undefined) {
    advertisementFeatures.forEach((item) => {
      if (featureList.includes(item)) {
        rank++;
      }
    });
  }

  if (selectList['housing-type'] === advertisement.offer.type) {
    rank = rank + 10;
  }
  if (+selectList['housing-rooms'] === advertisement.offer.rooms) {
    rank = rank + 10;
  }
  if (+selectList['housing-guests'] === advertisement.offer.guests) {
    rank = rank + 10;
  }
  const lowPrice = 10000;
  const middlePrice = 50000;

  switch (selectList['housing-price']){
    case 'low':
      if (+advertisement.offer.price <= lowPrice) {
        rank = rank + 10;
      }
      break;
    case 'middle':
      if (+advertisement.offer.price >= lowPrice && +advertisement.offer.price <= middlePrice) {
        rank = rank + 10;
      }
      break;
    case 'high':
      if (+advertisement.offer.price >= middlePrice) {
        rank = rank + 10;
      }
      break;
    default:
      break;
  }
  return rank;
};

const compareAdvertisements = (advertisementA, advertisementB) => {
  const rankA = getRank(advertisementA);
  const rankB = getRank(advertisementB);
  return rankB - rankA;
};

const filterStateHandler = (cb) => {
  mapFilters.addEventListener('change', () => {
    cb();
  });
};

export {compareAdvertisements, filterStateHandler};
