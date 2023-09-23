// Display "Hello, World!" every 2 seconds
const intervalId = setInterval(() => {
    console.log('Hello, World!');
  }, 2000);
  
  // Stop the interval after 10 seconds
  setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval stopped after 10 seconds.');
  }, 10000);
  