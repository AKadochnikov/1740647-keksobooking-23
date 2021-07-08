import {isEscEvent} from './utils/keydown-event.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successElement = successTemplate.cloneNode(true);
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorElement = errorTemplate.cloneNode(true);

const onSuccessKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeElementSuccess();
  }
};

const onErrorKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeElementError();
  }
};

const onSuccessClick = () => {
  closeElementSuccess();
};

const onErrorClick = () => {
  closeElementError();
};

const closeElementSuccess = () => {
  document.body.removeChild(successElement);
  document.removeEventListener('keydown', onSuccessKeydown);
  document.removeEventListener('click', onSuccessClick);
};

const closeElementError = () => {
  document.body.removeChild(errorElement);
  document.removeEventListener('keydown', onErrorKeydown);
  document.removeEventListener('click', onErrorClick);
};

const createSuccessElement = () => {
  document.body.appendChild(successElement);
  document.addEventListener('keydown', onSuccessKeydown);
  document.addEventListener('click', onSuccessClick);
};

const createErrorElement = () => {
  document.body.appendChild(errorElement);
  document.addEventListener('keydown', onErrorKeydown);
  document.addEventListener('click', onErrorClick);
};

export {createErrorElement, createSuccessElement};
