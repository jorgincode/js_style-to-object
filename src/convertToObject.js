'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stylesObject = {};

  sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration)
    .forEach((declaration) => {
      const [property, value] = declaration.split(':');

      if (property && value) {
        stylesObject[property.trim()] = value.trim();
      }
    });

  return stylesObject;
}

module.exports = convertToObject;
