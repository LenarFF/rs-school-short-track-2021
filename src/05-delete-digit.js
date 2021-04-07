/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  let newStr = '';
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    newStr = '';
    for (let j = 0; j < str.length; j++) {
      if (i !== j) newStr += str[j];
    }
    arr.push(+newStr);
  }
  arr.sort((a, b) => b - a);
  return arr[0];
}

module.exports = deleteDigit;
