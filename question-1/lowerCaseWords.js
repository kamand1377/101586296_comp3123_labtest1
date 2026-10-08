// Arrow function that takes an array and returns a promise
const lowerCaseWords = (mixedArray) => {
  return new Promise((resolve, reject) => {
    // Reject if the input is not an array
    if (!Array.isArray(mixedArray)) {
      reject(new Error('Input must be an array'));
      return;
    }

    // Keep only strings, then make them lowercase
    const words = mixedArray
      .filter((item) => typeof item === 'string')
      .map((word) => word.toLowerCase());

    // Send back the cleaned list
    resolve(words);
  });
};

// Test input from the lab
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

// Print the result if resolved, or the error if rejected
lowerCaseWords(mixedArray)
  .then((result) => console.log(result))
  .catch((error) => console.error(`Error: ${error.message}`));

// Test the reject path with a non-array input
lowerCaseWords('not an array')
  .then((result) => console.log(result))
  .catch((error) => console.error(`Error: ${error.message}`));