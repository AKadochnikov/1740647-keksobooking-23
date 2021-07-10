import {
  activateForm,
  MAP_FILTERS_CLASS_DISABLED,
  mapFilters,
  mapFiltersChildren,
  mapFiltersFeatures
} from './state-of-form.js';

const URL_KEKSOBOOKING = {
  SERVER: 'https://23.javascript.pages.academy/keksobooking',
  DATA: 'https://23.javascript.pages.academy/keksobooking/data',
};

const getData = (onSuccess, onFail) => {
  fetch(URL_KEKSOBOOKING.DATA)
    .then((response) => response.json())
    .then((advertisements) => {
      onSuccess(advertisements);
      activateForm(mapFilters, mapFiltersChildren, MAP_FILTERS_CLASS_DISABLED, mapFiltersFeatures);
    })
    .catch(() => {
      onFail('Не удалось выгрузить объявления. Попробуйте ещё раз');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    URL_KEKSOBOOKING.SERVER,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
