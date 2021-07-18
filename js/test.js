const advertisementFeatures = ['1', '2', '3'];
const featureList = ['4', '1'];
let filterChecker = false;

if (advertisementFeatures !== undefined && featureList.length !== 0) {
  featureList.forEach((item) => {
    if (advertisementFeatures.includes(item)) {
      filterChecker = true;
    } else {
      filterChecker = false;
      return filterChecker;
    }
  });
} else {
  filterChecker = true;
}

console.log(filterChecker);
