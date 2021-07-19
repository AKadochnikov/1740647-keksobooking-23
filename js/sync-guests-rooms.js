import {setAttributeDisabled, removeAttributeDisabled} from './utils/change-attribute-disabled.js';
import {setAttributeSelected, removeAttributeSelected} from './utils/change-attribute-selected.js';

const START_INDEX = 0;

const rooms = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const capacityOptions = capacity.querySelectorAll('option');
const capacityForOneGuest = capacity.querySelector('option[value= "1"]');
const notForGuest = capacity.querySelector('option[value= "0"]');

const setAttributeDisabledAll = () => {
  capacityOptions.forEach((item) => {
    setAttributeDisabled(item);
  });
  return capacity;
};

const removeAttributeSelectedAll = () => {
  capacityOptions.forEach((item) => {
    removeAttributeSelected(item);
  });
  return capacity;
};

const setDefaultCapacity = () => {
  setAttributeDisabledAll();
  removeAttributeSelectedAll();
  setAttributeSelected(capacityForOneGuest);
  removeAttributeDisabled(capacityForOneGuest);
};

const synchronizeRoomsCapacity = (item) => item.addEventListener('change', () => {
  setAttributeDisabledAll();
  removeAttributeSelectedAll();
  if (+item.value === 100) {
    removeAttributeDisabled(notForGuest);
    setAttributeSelected(notForGuest);
    return item;
  }
  for (let i = +item.value; i > START_INDEX; i--) {
    const selectedCapacity = capacity.querySelector(`option[value= "${item.value}"]`);
    const currentCapacity = capacity.querySelector(`option[value= "${i}"]`);
    removeAttributeDisabled(currentCapacity);
    setAttributeSelected(selectedCapacity);
  }
});
setDefaultCapacity();
synchronizeRoomsCapacity(rooms);

export {setDefaultCapacity};
