import {activateForm, adForm, formChildren, AD_FORM_CLASS_DISABLED, mapFilters, mapFiltersChildren, mapFiltersFeatures, MAP_FILTERS_CLASS_DISABLED} from './state-of-form.js';

const TOKYO_LAT = 35.65283;
const TOKYO_LNG = 139.83947;
const map = L.map('map-canvas');

const loadMap = () => {
  map.on('load', () => {
    activateForm(adForm, formChildren, AD_FORM_CLASS_DISABLED);
    activateForm(mapFilters, mapFiltersChildren, MAP_FILTERS_CLASS_DISABLED, mapFiltersFeatures);
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

export {TOKYO_LAT, TOKYO_LNG, map};