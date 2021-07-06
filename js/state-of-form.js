import {setAttributeDisabled, removeAttributeDisabled} from './utils/change-attribute-disabled.js';
import {showAlert} from './utils/show-alert';

const AD_FORM_CLASS_DISABLED = 'ad-form--disabled';
const MAP_FILTERS_CLASS_DISABLED = 'map__filters--disabled';

const adForm = document.querySelector('.ad-form');
const formChildren = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersChildren = mapFilters.querySelectorAll('.map__filter');
const mapFiltersFeatures = mapFilters.querySelector('.map__features');

const deactivateForm = (form, itemsForm, classDisabled, mapFeatures) => {
  form.classList.add(classDisabled);
  itemsForm.forEach((item) => {
    setAttributeDisabled(item);
  });
  if (mapFeatures) {
    setAttributeDisabled(mapFeatures);
  }
};

const activateForm = (form, itemsForm, classDisabled, mapFeatures) => {
  form.classList.remove(classDisabled);
  itemsForm.forEach((item) => {
    removeAttributeDisabled(item);
  });
  if (mapFeatures) {
    removeAttributeDisabled(mapFeatures);
  }
};

const setUserFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => showAlert('Не удалось отправить форму. Попробуйте ещё раз'),
      new FormData(evt.target),
    );
  });
};

deactivateForm(adForm, formChildren, AD_FORM_CLASS_DISABLED);
deactivateForm(mapFilters, mapFiltersChildren, MAP_FILTERS_CLASS_DISABLED, mapFiltersFeatures);

export {activateForm, adForm, formChildren, AD_FORM_CLASS_DISABLED, mapFilters, mapFiltersChildren, mapFiltersFeatures, MAP_FILTERS_CLASS_DISABLED};
