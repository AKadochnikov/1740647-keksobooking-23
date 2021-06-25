const setAttributeDisabled = (item) => {
  item.setAttribute('disabled', 'disabled');
  return item;
};

const removeAttributeDisabled = (item) => {
  item.removeAttribute('disabled', 'disabled');
  return item;
};

export {setAttributeDisabled, removeAttributeDisabled};
