const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const synchronizeTime = (item) => item.addEventListener('change', () => {
  if (item === timeIn) {
    timeOut.value = item.value;
  }
  timeIn.value = item.value;
});

synchronizeTime(timeIn);
synchronizeTime(timeOut);
