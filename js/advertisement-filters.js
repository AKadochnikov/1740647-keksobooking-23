import {mapFilters} from './state-of-form.js';

const LOW_PRICE = 10000;
const MIDDLE_PRICE = 50000;

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
    for (let i = featureList.length - 1; i >= 0; i--) {
      if (advertisementFeatures.includes(featureList[i])){
        filterChecker = true;
      } else {
        filterChecker = false;
        return filterChecker;
      }
    }
  } else if (advertisementFeatures === undefined && featureList.length !== 0) {
    filterChecker = false;
    return filterChecker;
  }

  switch (selectList['housing-price']){
    case 'low':
      if (+advertisement.offer.price <= LOW_PRICE) {
        filterChecker = true;
        return filterChecker;
      } else {
        filterChecker = false;
        return filterChecker;
      }
    case 'middle':
      if (+advertisement.offer.price >= LOW_PRICE && +advertisement.offer.price <= MIDDLE_PRICE) {
        filterChecker = true;
        return filterChecker;
      } else {
        filterChecker = false;
        return filterChecker;
      }
    case 'high':
      if (+advertisement.offer.price >= MIDDLE_PRICE) {
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

const filterStateHandler = (cb) => {
  mapFilters.addEventListener('change', () => {
    cb();
  });
};

export {getFilterAdvertisement, filterStateHandler};
