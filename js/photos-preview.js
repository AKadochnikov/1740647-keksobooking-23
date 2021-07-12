import {FILE_TYPES} from './avatar.js';

const imagesFileChooser = document.querySelector('#images');
const photoImages = document.querySelector('.ad-form__photo');

const previewPhoto = () => {
  imagesFileChooser.addEventListener('change', () => {
    photoImages.innerHTML = '';
    for (const image of imagesFileChooser.files) {
      const fileName = image.name.toLowerCase();
      const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
      if (matches) {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          const img = document.createElement('img');
          img.setAttribute('src', reader.result);
          img.style.width = '45%';
          img.style.boxSizing = 'border-box';
          img.style.margin = '5px';
          photoImages.appendChild(img);
        });
        reader.readAsDataURL(image);
      }
    }
    photoImages.style.marginTop = '10px';
    photoImages.style.width = '100%';
    photoImages.style.display = 'flex';
    photoImages.style.justifyContent = 'space-around';
    photoImages.style.gap = '10px';
    photoImages.style.flexWrap = 'wrap';
    photoImages.style.overflowY = 'scroll';
    photoImages.style.height = '150px';
  });
};
previewPhoto();
