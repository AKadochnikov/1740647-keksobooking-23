import {activateForm, adForm, formChildren, AD_FORM_CLASS_DISABLED} from './state-of-form.js';
import {getData} from './api.js';
import {createAdvertisementMarker} from './create-advertisement-marker.js';
import {showAlert} from './utils/show-alert.js';
import {filterStateHandler} from './advertisement-filters.js';

const TOKYO_LAT = 35.65283;
const TOKYO_LNG = 139.83947;
const map = L.map('map-canvas');

const loadMap = () => {
  map.on('load', () => {
    activateForm(adForm, formChildren, AD_FORM_CLASS_DISABLED);
    getData((advertisements) => {
      createAdvertisementMarker(advertisements);
      filterStateHandler(() => createAdvertisementMarker(advertisements));
    }, showAlert);
  }).setView({
    lat: TOKYO_LAT,
    lng: TOKYO_LNG,
  }, 10);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};

loadMap();

const markerGroup = L.layerGroup().addTo(map);

export {TOKYO_LAT, TOKYO_LNG, map, markerGroup};
