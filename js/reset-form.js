import {adForm, mapFilters} from './state-of-form.js';
import {resetMainMarker, setDefaultAddress, inputAddress} from './create-main-marker.js';
import {setDefaultCapacity} from './sync-guests-rooms.js';
import {createSuccessElement} from './create-success-error-elements.js';

const resetButton = adForm.querySelector('.ad-form__reset');

const resetForm = () => {
  adForm.reset();
  mapFilters.reset();
  resetMainMarker();
  inputAddress.removeAttribute('readonly');
  setDefaultAddress();
  setDefaultCapacity();
};

const submitSuccessHandler = () => {
  createSuccessElement();
  resetForm();
};

const resetFormHandler = () => resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
});

resetFormHandler();

export {resetForm, submitSuccessHandler};
