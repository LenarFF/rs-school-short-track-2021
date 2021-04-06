/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const firstString = s1.split('');
  let res = 0;
  let search = null;
  for (let i = 0; i < s2.length; i++) {
    search = firstString.indexOf(s2[i]);
    if (search !== -1) {
      res += 1;
      firstString.splice(search, 1);
    }
  }
  return res;
}

module.exports = getCommonCharacterCount;
