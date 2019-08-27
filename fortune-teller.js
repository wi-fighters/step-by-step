/**
 * This is a fortune teller function.
 * Why pay a fortune teller when you can just program your fortune yourself?
 *
 * @param {number} numberOfChildren
 * @param {string} partnerName
 * @param {string} geoLocation
 * @param {string} jobTitle
 * 
 * @return {string} TODO: what are we returning?
 *
 * @example
 * 
 *     tellFortune(5, 'partnerino', 'someplace', 'best job ever')
 */

function tellFortune(numberOfChildren, partnerName, geoLocation, jobTitle) {

    console.log(numberOfChildren, partnerName, geoLocation, jobTitle);
}

// From this...
tellFortune(5, 'partnerino', 'someplace', 'best job ever');
console.log(/* TODO: add function call here */);

// To this...
console.log(tellFortune(5, 'partnerino', 'someplace', 'best job ever'));