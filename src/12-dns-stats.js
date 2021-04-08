/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = [];
  const obj = {};
  let dns = '';
  for (let i = 0; i < domains.length; i++) {
    arr.push(domains[i].split('.'));
  }
  for (let i = 0; i < arr.length; i++) {
    dns = '';
    for (let j = arr[i].length - 1; j > -1; j--) {
      dns += `.${arr[i][j]}`;
      if (dns in obj) {
        obj[dns] += 1;
      } else {
        obj[dns] = 1;
      }
    }
  }
  return obj;
}

module.exports = getDNSStats;
