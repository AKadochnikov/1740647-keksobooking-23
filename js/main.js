import './generator-for-card.js';
import './validation-form.js';
import './map.js';
import './create-main-marker.js';
import './advertisement-filters.js';
import './avatar.js';
import './photos-preview.js';
import {setUserFormSubmit} from './state-of-form.js';
import {submitSuccessHandler} from './reset-form.js';
import {createErrorElement} from './create-success-error-elements.js';

setUserFormSubmit(submitSuccessHandler, createErrorElement);

