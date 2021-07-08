import {isEscEvent} from './utils/keydown-event.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successElement = successTemplate.cloneNode(true);
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorElement = errorTemplate.cloneNode(true);

const closeElementSuccess = (keydownFunction, clickFunction) => {
  document.body.removeChild(successElement);
  document.removeEventListener('keydown', keydownFunction);
  successElement.removeEventListener('click', clickFunction);
};
const closeElementError = (keydownFunction, clickFunction) => {
  document.body.removeChild(errorElement);
  document.removeEventListener('keydown', keydownFunction);
  errorElement.removeEventListener('click', clickFunction);
};

const onSuccessClick = (keydownFunction, clickFunction) => closeElementSuccess(keydownFunction, clickFunction);
const onErrorClick = (keydownFunction, clickFunction) => closeElementError(keydownFunction, clickFunction);

const onSuccessKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeElementSuccess(onSuccessKeydown, onSuccessClick);
  }
};

const onErrorKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeElementError(onErrorKeydown, onErrorClick);
  }
};

const createSuccessElement = () => {
  document.body.appendChild(successElement);
  document.addEventListener('keydown', onSuccessKeydown);
  successElement.addEventListener('click', onSuccessClick);
};

const createErrorElement = () => {
  document.body.appendChild(errorElement);
  document.addEventListener('keydown', onErrorKeydown);
  errorElement.addEventListener('click', onErrorClick);
};

export {createErrorElement, createSuccessElement};
