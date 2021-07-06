import {TOKYO_LAT, TOKYO_LNG, map} from './map.js';

const DIGIT = 5;

const inputAddress = document.querySelector('#address');

const setDefaultAddress = () => {
  inputAddress.value = `${TOKYO_LAT}, ${TOKYO_LNG}`;
  inputAddress.setAttribute('readonly', 'readonly');
};

const createMainMarker = () => {
  const mainPinIcon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
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

  let mainMarkerAddress;
  mainPinMarker.on('moveend', (evt) => {
    mainMarkerAddress = evt.target.getLatLng();
    inputAddress.value = `${mainMarkerAddress.lat.toFixed(DIGIT)}, ${mainMarkerAddress.lng.toFixed(DIGIT)}`;
  });

  mainPinMarker.addTo(map);
};

setDefaultAddress();
createMainMarker();

export {createMainMarker};
