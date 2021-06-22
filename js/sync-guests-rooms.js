const rooms = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const CAPACITY_FOR_3_GUESTS = capacity[0];
const CAPACITY_FOR_2_GUESTS = capacity[1];
const CAPACITY_FOR_1_GUEST = capacity[2];
const NOT_FOR_GUESTS = capacity[3];

const setAttributeDisabled = (item) => {
  item.setAttribute('disabled', 'disabled');
  return item;
};
const setAttributeSelected = (item) => {
  item.setAttribute('selected', 'selected');
  return item;
};
const removeAttributeDisabled = (item) => {
  item.removeAttribute('disabled', 'disabled');
  return item;
};
const removeAttributeSelected = (item) => {
  item.removeAttribute('selected', 'selected');
};

const synchronizeRoomsCapacity = (item) => item.addEventListener('change', () => {
  switch (rooms.value){
    case '1':
      setAttributeDisabled(CAPACITY_FOR_3_GUESTS);
      setAttributeDisabled(CAPACITY_FOR_2_GUESTS);
      setAttributeDisabled(NOT_FOR_GUESTS);
      setAttributeSelected(CAPACITY_FOR_1_GUEST);
      removeAttributeDisabled(CAPACITY_FOR_1_GUEST);
      removeAttributeSelected(CAPACITY_FOR_2_GUESTS);
      removeAttributeSelected(CAPACITY_FOR_3_GUESTS);
      removeAttributeSelected(NOT_FOR_GUESTS);
      break;
    case '2':
      setAttributeDisabled(CAPACITY_FOR_3_GUESTS);
      setAttributeDisabled(NOT_FOR_GUESTS);
      setAttributeSelected(CAPACITY_FOR_2_GUESTS);
      removeAttributeDisabled(CAPACITY_FOR_1_GUEST);
      removeAttributeDisabled(CAPACITY_FOR_2_GUESTS);
      removeAttributeSelected(CAPACITY_FOR_3_GUESTS);
      removeAttributeSelected(CAPACITY_FOR_1_GUEST);
      removeAttributeSelected(NOT_FOR_GUESTS);
      break;
    case '3':
      setAttributeDisabled(NOT_FOR_GUESTS);
      setAttributeSelected(CAPACITY_FOR_3_GUESTS);
      removeAttributeDisabled(CAPACITY_FOR_3_GUESTS);
      removeAttributeDisabled(CAPACITY_FOR_1_GUEST);
      removeAttributeDisabled(CAPACITY_FOR_2_GUESTS);
      removeAttributeSelected(CAPACITY_FOR_2_GUESTS);
      removeAttributeSelected(CAPACITY_FOR_1_GUEST);
      removeAttributeSelected(NOT_FOR_GUESTS);
      break;
    case '100':
      setAttributeDisabled(CAPACITY_FOR_3_GUESTS);
      setAttributeDisabled(CAPACITY_FOR_2_GUESTS);
      setAttributeDisabled(CAPACITY_FOR_1_GUEST);
      setAttributeSelected(NOT_FOR_GUESTS);
      removeAttributeDisabled(NOT_FOR_GUESTS);
      removeAttributeSelected(CAPACITY_FOR_1_GUEST);
      removeAttributeSelected(CAPACITY_FOR_2_GUESTS);
      removeAttributeSelected(CAPACITY_FOR_3_GUESTS);
  }
  return item;
});
setAttributeDisabled(CAPACITY_FOR_3_GUESTS);
setAttributeDisabled(CAPACITY_FOR_2_GUESTS);
setAttributeDisabled(NOT_FOR_GUESTS);
synchronizeRoomsCapacity(rooms);
