import {getGeneratedCard} from './generator-for-card.js';
import {markerGroup} from './map.js';
import {getFilterAdvertisement} from './advertisement-filters.js';

const ADVERTISEMENT_LIMIT = 10;
const ADVERTISEMENT_ICON_SIZE = [40, 40];
const ADVERTISEMENT_ICON_ANCHOR = [20, 40];

const getFilteredArray = (copiedArray, resultArray) => {
  let booleanResult = false;
  for (let i = 0; i < copiedArray.length;) {
    booleanResult = getFilterAdvertisement(copiedArray[i]);
    if (booleanResult) {
      resultArray.push(copiedArray[i]);
      i++;
    }
    i++;
    if (resultArray.length === ADVERTISEMENT_LIMIT) {
      return resultArray;
    }
  }
  return resultArray;
};

const createAdvertisementMarker = (advertisements) => {
  markerGroup.clearLayers();
  const currentCopiedAdvertisements = advertisements.slice();
  const filteredAdvertisements = [];
  getFilteredArray(currentCopiedAdvertisements, filteredAdvertisements);
  filteredAdvertisements
    .forEach((advertisement) => {
      const icon = L.icon({
        iconUrl: './img/pin.svg',
        iconSize: ADVERTISEMENT_ICON_SIZE,
        iconAnchor: ADVERTISEMENT_ICON_ANCHOR,
      });

      const marker = L.marker(
        {
          lat: advertisement.location.lat,
          lng: advertisement.location.lng,
        },
        {
          icon,
        },
      );
      marker
        .addTo(markerGroup)
        .bindPopup(getGeneratedCard(advertisement),
          {
            keepInView: true,
          },
        );
    });
};

export {createAdvertisementMarker};
