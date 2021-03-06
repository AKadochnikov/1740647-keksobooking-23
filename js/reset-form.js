import {adForm, mapFilters} from './state-of-form.js';
import {resetMainMarker, setDefaultAddress, inputAddress} from './create-main-marker.js';
import {setDefaultCapacity} from './sync-guests-rooms.js';
import {createSuccessElement} from './create-success-error-elements.js';
import {changePriceMinPlaceholder, FLAT_MIN_PRICE} from './type-of-housing.js';
import {avatarImage} from './avatar.js';
import {photoImages} from './photos-preview.js';
import {createAdvertisementMarker} from './create-advertisement-marker.js';
import {currentAdvertisements} from './map.js';

const resetButton = adForm.querySelector('.ad-form__reset');

const resetFormValues = () => {
  avatarImage.src = 'img/muffin-grey.svg';
  photoImages.innerHTML = '';
  photoImages.style.marginTop = '';
  photoImages.style.width = '';
  photoImages.style.display = '';
  photoImages.style.justifyContent = '';
  photoImages.style.gap = '';
  photoImages.style.flexWrap = '';
  photoImages.style.overflowY = '';
  photoImages.style.height = '';
  adForm.reset();
  mapFilters.reset();
  resetMainMarker();
  inputAddress.removeAttribute('readonly');
  setDefaultAddress();
  setDefaultCapacity();
  changePriceMinPlaceholder(FLAT_MIN_PRICE);
};

const submitSuccessHandler = () => {
  createSuccessElement();
  resetFormValues();
  createAdvertisementMarker(currentAdvertisements);
};

const resetFormHandler = () => resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetFormValues();
  createAdvertisementMarker(currentAdvertisements);
});

resetFormHandler();

export {submitSuccessHandler};
