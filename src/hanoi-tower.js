const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {
    turns: 0,
    seconds: 0,
  };
  result.turns = 2 ** disksNumber - 1;
  let turnsSecond = turnsSpeed / 3600;
  let secondTurn = 1 / turnsSecond;
  result.seconds = Math.floor(result.turns * secondTurn);
  return result;
};
