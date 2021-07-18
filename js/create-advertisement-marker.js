import {getGeneratedCard} from './generator-for-card.js';
import {markerGroup} from './map.js';
import {getFilterAdvertisement/*, compareAdvertisements*/} from './advertisement-filters.js';

const ADVERTISEMENT_LIMIT = 10;

const createAdvertisementMarker = (advertisements) => {
  markerGroup.clearLayers();
  advertisements
    .slice()
    .filter(getFilterAdvertisement)
    .slice(0, ADVERTISEMENT_LIMIT)
    /*.sort(compareAdvertisements)*/
    .forEach((advertisement) => {
      const icon = L.icon({
        iconUrl: './img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
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
