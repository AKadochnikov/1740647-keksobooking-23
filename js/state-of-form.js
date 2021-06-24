import {setAttributeDisabled, removeAttributeDisabled} from './sync-guests-rooms.js';

const adForm = document.querySelector('.ad-form');
const formChildren = adForm.querySelectorAll('fieldset');
console.log(formChildren.parentNode);

const deactivateForm = (form, itemsForm ) => {
  form
  itemsForm.forEach((item) => {
    setAttributeDisabled(item);
    return itemsForm;
  });
};
deactivateForm(formChildren);
