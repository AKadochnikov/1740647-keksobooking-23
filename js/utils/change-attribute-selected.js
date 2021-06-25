const setAttributeSelected = (item) => {
  item.setAttribute('selected', 'selected');
  return item;
};

const removeAttributeSelected = (item) => {
  item.removeAttribute('selected', 'selected');
};

export {setAttributeSelected, removeAttributeSelected};
