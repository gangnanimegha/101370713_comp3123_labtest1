// Function to check if a value is a string
const isString = (val) => typeof val === 'string';

// Function to lower case words in an array and filter non-strings
const lowerCaseWords = (mixedArray) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(mixedArray)) {
      reject("Input is not an array");
      return;
    }

    const resultArray = mixedArray
      .filter(isString)
      .map((word) => word.toLowerCase());

    if (resultArray.length > 0) {
      resolve(resultArray);
    } else {
      reject("No valid string found in the array");
    }
  });
};

// Example mentioned
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
