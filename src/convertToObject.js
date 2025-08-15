'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line)
    .forEach((line) => {
      const [prop, value] = line.split(':');

      if (prop && value) {
        result[prop.trim()] = value.trim();
      }
    });

  return result;
}

module.exports = convertToObject;
