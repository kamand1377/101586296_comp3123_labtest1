// Returns a promise that resolves after 500ms
const resolvedPromise = () => {
  return new Promise((resolve, reject) => {
    // Wait 500ms before resolving
    setTimeout(() => {
      // Create the success message
      const success = { message: 'delayed success!' };
      // Send the message back
      resolve(success);
    }, 500);
  });
};

// Returns a promise that rejects after 500ms
const rejectedPromise = () => {
  return new Promise((resolve, reject) => {
    // Wait 500ms before rejecting
    setTimeout(() => {
      try {
        // Throw an error on purpose
        throw new Error('delayed exception!');
      } catch (e) {
        // Catch the error and send it back as an object
        reject({ error: e.message });
      }
    }, 500);
  });
};

// Call the first promise and print the result
resolvedPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// Call the second promise and print the error
rejectedPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));