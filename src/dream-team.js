const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let teamName = '';
  let rec = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      let first = members[i].trim().split('');
      rec.push(first[0]);
      teamName = rec.sort(function (a, b) {
        return a.localeCompare(b);
      }).join('').toUpperCase();
    }
  }
  return teamName;
};
