import {isEscEvent} from './utils/keydown-event.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successElement = successTemplate.cloneNode(true);
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorElement = errorTemplate.cloneNode(true);

const onSuccessClick = () => closeElementSuccess();
const onErrorClick = () => closeElementError();

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

function closeElementSuccess () {
  document.body.removeChild(successElement);
  document.removeEventListener('keydown', onSuccessKeydown);
  successElement.removeEventListener('click', onSuccessClick);
}
function closeElementError () {
  document.body.removeChild(errorElement);
  document.removeEventListener('keydown', onErrorKeydown);
  errorElement.removeEventListener('click', onErrorClick);
}

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
