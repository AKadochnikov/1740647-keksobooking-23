const BUNGALOW_MIN_PRICE = 0;
const FLAT_MIN_PRICE = 1000;
const HOTEL_MIN_PRICE = 3000;
const HOUSE_MIN_PRICE = 5000;
const PALACE_MIN_PRICE = 10000;

const typeOfHousing = document.querySelector('#type');
const price = document.querySelector('#price');

const changePriceMinPlaceholder = (item) => {
  price.min = item;
  price.placeholder = item;
};

const synchronizeTypePrice = (item) => item.addEventListener('change', () => {
  switch (item.value) {
    case 'bungalow':
      changePriceMinPlaceholder(BUNGALOW_MIN_PRICE);
      break;
    case 'flat':
      changePriceMinPlaceholder(FLAT_MIN_PRICE);
      break;
    case 'hotel':
      changePriceMinPlaceholder(HOTEL_MIN_PRICE);
      break;
    case 'house':
      changePriceMinPlaceholder(HOUSE_MIN_PRICE);
      break;
    case 'palace':
      changePriceMinPlaceholder(PALACE_MIN_PRICE);
      break;
    default:
      changePriceMinPlaceholder(BUNGALOW_MIN_PRICE);
      break;
  }
});
changePriceMinPlaceholder(FLAT_MIN_PRICE);
synchronizeTypePrice(typeOfHousing);
export {price, changePriceMinPlaceholder, FLAT_MIN_PRICE};
