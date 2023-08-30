// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================

/**
 * Challenge - 1
 *
 * Calculate and return the sum of the numbers between 1 and a destination.
 * (1 to destination) where destination is a number greater than 1 and destination is included when calculating the sum.
 *
 * If you did Challenge - 1, remove the comment in the line just after this function
 *
 * @param {Number} destination is the stopping number
 * @returns number the sum of the numbers from 1 to destination
 */
function sumOfNumbersTo(destination) {
  let sum = 0;
  for (let i = 0; i < destination.length; i++) {
    sum = sum + destination[i];
  }
  return sum;
}
const destinationArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = sumOfNumbersTo(destinationArray);
// maybe(
//   'Challenge - 1 : my sumOfNumbersTo function can sum an array of numbers',
//   () => {
//     test('add all numbers in the array', () => {
//       expect(sumOfNumbersTo(10)).toBe(55);
//     }
//     );


console.log(`result of sum of number is ${result}`);



assignment.sumOfNumbersTo = sumOfNumbersTo;

/**
 * Challenge - 2
 *
 * Calculate count, sum and put in an array the even numbers from 1 to a destination. Object keys are count, sum, arrayOfEvenNumbers.
 *
 * If you did Challenge - 2, remove the comment in the line just after this function
 *
 * @param {Number} destination the stopping number
 * @returns the object containing count, sum, arrayOfEvenNumbers from 1 to destination
 */
function countEvenNumbersWithin(destination) {
  // Write your code here
  // get the number from 1 to destination
  let sum = 0;
  let count = 0;
  let arrayOfEvenNumbers = [];
  for (let i = 0; i < destination.length; i++) {
    if (destination[i] % 2 === 0) {
      count++;
      sum = sum + destination[i];
      arrayOfEvenNumbers.push(destination[i]);
    }
  }

  return {
    // property value shorthand
    // when the property name and the value name are the same
    // you can just write the property name in your object
    count: count,
    SumOfEvenNumbers: sum,
    evenNumbers: arrayOfEvenNumbers
  };
}
const destinationValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const answer = countEvenNumbersWithin(destinationValue);
console.log(`the numbers of even number in destination is ${answer.count}`)
console.log(`the sum of even numbers in destination is ${answer.SumOfEvenNumbers}`)
console.log(`the array of even number in destination is ${answer.evenNumbers}`)

assignment.countEvenNumbersWithin = countEvenNumbersWithin;

/**
 * Challenge - 3
 *
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 *
 * If you did Challenge - 3, remove the comment in the line just after this function
 *
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 *
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
  let result = [];

  return result;
}

// assignment.celsiusToFahrenheit = celsiusToFahrenheit;

// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================
