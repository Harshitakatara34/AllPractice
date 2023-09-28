// 7)Print a pattern of numbers from to as shown below. Each of the numbers is separated by a single space.

// For n = 2

// 2 2 2
// 2 1 2
// 2 2 2

// For n = 4

// 4 4 4 4 4 4 4
// 4 3 3 3 3 3 4
// 4 3 2 2 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 2 2 3 4
// 4 3 3 3 3 3 4
// 4 4 4 4 4 4 4



function printPattern(n) {
    const size = 2 * n - 1;
    const pattern = [];
  
    // Initialize the pattern with values from n to 1 and back to n
    for (let i = 0; i < size; i++) {
      pattern[i] = [];
      for (let j = 0; j < size; j++) {
        pattern[i][j] = n;
      }
    }
  
    // Fill the inner part of the pattern with decreasing values
    for (let i = 1; i < n; i++) {
      for (let j = i; j < size - i; j++) {
        for (let k = i; k < size - i; k++) {
          pattern[j][k] = n - i;
        }
      }
    }
  
    // Print the pattern
    for (let i = 0; i < size; i++) {
      console.log(pattern[i].join(' '));
    }
  }
  
  // Example usage for n = 4
  printPattern(4);