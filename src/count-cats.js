const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let catsNum = 0;
  for (let i = 0; i < backyard.length; i++) {
    let row = backyard[i];
    for (let k = 0; k < row.length; k++) {
      if (backyard[i][k] === '^^') {
        catsNum++;
      }
    }
  }
  return catsNum;
};
