/**
 * Remove quote character surrounding a string
 *
 * @param {string} str A string with surrounding quotes
 * @returns {string} `str` without surrounding quotes
 */
function stripQuotes(str) {
  // Fail if an invalid argument is provided
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str.replace(/^"(.+)"$/, '$1');
}

module.exports = stripQuotes;
