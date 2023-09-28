// 4)For this question, the input will be a string consisting only of the characters 0, 1 and ?, where the? acts as a wildcard that can be either a 0 or 1, and your goal is to print all possible combinations of the string. For example, if the string is "011?0" then your program should output a set of all strings, which are: ["01100", "01110"].


function generateCombinations(input) {
    const result = [];
    generateCombinationsHelper(input, 0, '', result);
    return result;
  }
  
  function generateCombinationsHelper(input, index, current, result) {
    if (index === input.length) {
      result.push(current);
      return;
    }
  
    const char = input[index];
    if (char === '?') {
      generateCombinationsHelper(input, index + 1, current + '0', result);
      generateCombinationsHelper(input, index + 1, current + '1', result);
    } else {
      generateCombinationsHelper(input, index + 1, current + char, result);
    }
  }
  
  // Example usage:
  const input = "0?1?0";
  const combinations = generateCombinations(input);
  console.log(combinations);