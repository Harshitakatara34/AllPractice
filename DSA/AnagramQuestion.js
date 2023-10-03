// function areAnagrams(str1, str2) {
//     // Remove spaces and convert to lowercase for accurate comparison
//     const cleanStr1 = str1.replace(/ /g, '').toLowerCase();
//     const cleanStr2 = str2.replace(/ /g, '').toLowerCase();
//     // Check if the lengths of the two strings are the same
//     if (cleanStr1.length !== cleanStr2.length) {
//       return false;
//     }
  
//     // Create character frequency counters for both strings
//     const charCount1 = {};
//     const charCount2 = {};
  
//     // Populate the character frequency counters for str1
//     for (const char of cleanStr1) {
//       charCount1[char] = (charCount1[char] || 0) + 1;
//     }
  
//     // Populate the character frequency counters for str2
//     for (const char of cleanStr2) {
//       charCount2[char] = (charCount2[char] || 0) + 1;
//     }
  
//     // Compare the character frequency counters
//     for (const char in charCount1) {
//       if (charCount1[char] !== charCount2[char]) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   // Test cases
//   console.log(areAnagrams('listen', 'silent')); // true
//   console.log(areAnagrams('hello', 'world'));   // false
//   console.log(areAnagrams('Astronomer', 'Moon starer')); // true