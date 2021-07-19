import {activateForm, adForm, formChildren, AD_FORM_CLASS_DISABLED, setUserFormSubmit} from './state-of-form.js';
import {getData} from './api.js';
import {createAdvertisementMarker} from './create-advertisement-marker.js';
import {showAlert} from './utils/show-alert.js';
import {filterStateHandler} from './advertisement-filters.js';
import {debounce} from './utils/debounce.js';
import {resetFormHandler, submitSuccessHandler} from './reset-form.js';
import {createMainMarker} from './create-main-marker.js';
import {TOKYO_LNG, TOKYO_LAT} from './create-main-marker.js';
import {createErrorElement} from './create-success-error-elements.js';

const DELAY_TIME = 1500;
const MAP_ZOOM = 10;
const map = L.map('map-canvas');

const loadMap = () => {
  map.on('load', () => {
    activateForm(adForm, formChildren, AD_FORM_CLASS_DISABLED);
    getData((advertisements) => {
      createAdvertisementMarker(advertisements);
      setUserFormSubmit(advertisements, submitSuccessHandler, createErrorElement);
      resetFormHandler(advertisements);
      filterStateHandler(debounce(() => createAdvertisementMarker(advertisements), DELAY_TIME));
    }, showAlert);
    createMainMarker();
  }).setView({
    lat: TOKYO_LAT,
    lng: TOKYO_LNG,
  }, MAP_ZOOM);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};

loadMap();

const markerGroup = L.layerGroup().addTo(map);

export {TOKYO_LAT, TOKYO_LNG, map, markerGroup, loadMap};
