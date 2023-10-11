function isPalindrome(arr) {
    const n = arr.length;
    for (let i = 0; i < n / 2; i++) {
      if (arr[i] !== arr[n - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  const arr = [2, 3, 5, 6, 5];
  const n = arr.length;
  
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const subarray = arr.slice(i, j);
      if (isPalindrome(subarray)) {
        console.log('First Palindromic Subarray:', subarray);
        break;
      }
    }
  }
  