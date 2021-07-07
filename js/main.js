import './generator-for-card.js';
import './validation-form.js';
import {setUserFormSubmit} from './state-of-form.js';
import './map.js';
import './create-main-marker.js';
import {createAdvertisementMarker} from './create-advertisement-marker.js';
import {getData} from './api.js';
import {showAlert} from './utils/show-alert.js';
import {resetForm} from './reset-form.js';

getData((advertisements) => {
  createAdvertisementMarker(advertisements.slice(0, 15));
}, showAlert);

setUserFormSubmit(resetForm);
