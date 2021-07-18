import {TOKYO_LAT, TOKYO_LNG, map} from './map.js';

const DIGIT = 5;
const MAIN_ICON_SIZE = [52, 52];
const MAIN_ICON_ANCHOR = [26, 52];
const inputAddress = document.querySelector('#address');

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: MAIN_ICON_SIZE,
  iconAnchor: MAIN_ICON_ANCHOR,
});

const mainPinMarker = L.marker(
  {
    lat: TOKYO_LAT,
    lng: TOKYO_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const setDefaultAddress = () => {
  inputAddress.value = `${TOKYO_LAT}, ${TOKYO_LNG}`;
  inputAddress.setAttribute('readonly', 'readonly');
};

const resetMainMarker = () => {
  mainPinMarker.setLatLng({
    lat: TOKYO_LAT,
    lng: TOKYO_LNG,
  });
  map.setView({
    lat: TOKYO_LAT,
    lng: TOKYO_LNG,
  });
};

const createMainMarker = () => {
  let mainMarkerAddress;
  mainPinMarker.on('move', (evt) => {
    mainMarkerAddress = evt.target.getLatLng();
    inputAddress.value = `${mainMarkerAddress.lat.toFixed(DIGIT)}, ${mainMarkerAddress.lng.toFixed(DIGIT)}`;
  });

  mainPinMarker.addTo(map);
};

setDefaultAddress();
createMainMarker();

export {createMainMarker, setDefaultAddress, inputAddress, resetMainMarker, mainPinMarker};
