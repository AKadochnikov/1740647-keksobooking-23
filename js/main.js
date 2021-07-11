import './generator-for-card.js';
import './validation-form.js';
import {setUserFormSubmit} from './state-of-form.js';
import './map.js';
import './create-main-marker.js';
import {submitSuccessHandler} from './reset-form.js';
import {createErrorElement} from './create-success-error-elements.js';
import './advertisement-filters.js';

setUserFormSubmit(submitSuccessHandler, createErrorElement);
