/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const obj = {};
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] in obj && str[i] === str[i - 1]) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
      arr.push(str[i]);
    }
  }
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] !== 1) {
      result += `${obj[arr[i]]}${arr[i]}`;
    } else {
      result += `${arr[i]}`;
    }
  }
  return result;
}

module.exports = encodeLine;
