const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-next') {
      arr.splice(i, 2);
    }
    else if (arr[i] == '--discard-prev') {
      arr.splice(i - 1, 2);
    }
    else if (arr[i] == '--double-next') {
      arr.splice(i, 1, arr[i + 1]);
    }
    else if (arr[i] == '--double-prev') {
      arr.splice(i, 1, arr[i - 1]);
    }
    return arr;
  }
};
