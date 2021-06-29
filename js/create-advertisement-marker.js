import {getGeneratedCard, similarAdvertisements} from './generator-for-card.js';
import {map} from './map.js';

const createAdvertisementMarker = (advertisements) => advertisements.forEach((advertisement) => {
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
    .addTo(map)
    .bindPopup(getGeneratedCard(advertisement),
      {
        keepInView: true,
      },
    );
});

createAdvertisementMarker(similarAdvertisements);
