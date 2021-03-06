const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarFile = document.querySelector('#avatar');
const avatarImage = document.querySelector('.ad-form-header__preview img');
const previewAvatar = () => {
  avatarFile.addEventListener('change', () => {
    const file = avatarFile.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        avatarImage.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

previewAvatar();

export {FILE_TYPES, avatarImage};
