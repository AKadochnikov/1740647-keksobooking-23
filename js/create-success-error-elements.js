import {isEscEvent} from './utils/keydown-event.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successElement = successTemplate.cloneNode(true);
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorElement = errorTemplate.cloneNode(true);

const closeElementSuccess = (keydownFunction, clickFunction) => {
  document.body.removeChild(successElement);
  document.removeEventListener('keydown', keydownFunction);
  document.removeEventListener('click', clickFunction);
};
const closeElementError = (keydownFunction, clickFunction) => {
  document.body.removeChild(errorElement);
  document.removeEventListener('keydown', keydownFunction);
  document.removeEventListener('click', clickFunction);
};

const onSuccessKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    return closeElementSuccess();
  }
};

const onErrorKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    return closeElementError();
  }
};

const onSuccessClick = () => closeElementSuccess(onSuccessKeydown, onSuccessClick);
const onErrorClick = () => closeElementError(onErrorKeydown, onErrorClick);

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
