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
    } else if (value === 'any') {
      selectsObj[name] = 'any';
    }
  });
  return selectsObj;
};
/*
const getRank = (advertisement) => {
  const featureList = getFeaturesArray();
  let rank = 0;
  const advertisementFeatures = advertisement.offer.features;
  if (advertisementFeatures !== undefined) {
    advertisementFeatures.forEach((item) => {
      if (featureList.includes(item)) {
        rank++;
      }
    });
  }
  return rank;
};*/

const getFilterAdvertisement = (advertisement) => {
  const featureList = getFeaturesArray();
  const selectList = getSelectsObj();
  let filterChecker = false;
  const advertisementFeatures = advertisement.offer.features;

  switch (selectList['housing-type']) {
    case advertisement.offer.type:
      filterChecker = true;
      break;
    case 'any':
      filterChecker = true;
      break;
    default:
      return filterChecker;
  }

  if (+selectList['housing-rooms'] === advertisement.offer.rooms) {
    filterChecker = true;
  } else if (selectList['housing-rooms'] === 'any') {
    filterChecker = true;
  } else {
    filterChecker = false;
    return filterChecker;
  }

  if (+selectList['housing-guests'] === advertisement.offer.guests) {
    filterChecker = true;
  } else if (selectList['housing-guests'] === 'any') {
    filterChecker = true;
  } else {
    filterChecker = false;
    return filterChecker;
  }

  if (advertisementFeatures !== undefined && featureList.length !== 0) {
    featureList.forEach((item) => {
      if (advertisementFeatures.includes(item)) {
        filterChecker = true;
      } else {
        filterChecker = false;
        return filterChecker;
      }
    });
    if (filterChecker === false) {
      return filterChecker;
    }
  } else if (advertisementFeatures === undefined && featureList.length !== 0){
    filterChecker = false;
    return filterChecker;
  } else {
    filterChecker = true;
  }

  const lowPrice = 10000;
  const middlePrice = 50000;

  switch (selectList['housing-price']){
    case 'low':
      if (+advertisement.offer.price <= lowPrice) {
        filterChecker = true;
        return filterChecker;
      } else {
        filterChecker = false;
        return filterChecker;
      }
    case 'middle':
      if (+advertisement.offer.price >= lowPrice && +advertisement.offer.price <= middlePrice) {
        filterChecker = true;
        return filterChecker;
      } else {
        filterChecker = false;
        return filterChecker;
      }
    case 'high':
      if (+advertisement.offer.price >= middlePrice) {
        filterChecker = true;
        return filterChecker;
      } else {
        filterChecker = false;
        return filterChecker;
      }
    default:
      filterChecker = true;
      return filterChecker;
  }
};
/*
const compareAdvertisements = (advertisementA, advertisementB) => {
  const rankA = getRank(advertisementA);
  const rankB = getRank(advertisementB);
  return rankB - rankA;
};
*/
const filterStateHandler = (cb) => {
  mapFilters.addEventListener('change', () => {
    cb();
  });
};

export {getFilterAdvertisement, /*compareAdvertisements,*/ filterStateHandler};
