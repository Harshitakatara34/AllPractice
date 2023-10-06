// 12) Given two integers x and y, return an array of integers between the range of x and y using recursion

// If x = 2 and y = 8 ⇒ [3,4,5,6,7]

// function rangeBetween(x, y) {
    //     if (x >= y-1) {
    //         return [];
    //     }
    //     return [x + 1, ...rangeBetween(x + 1, y)];
    // }
    // const x = 5;     
    // const y = 9;
    // const result = rangeBetween(x, y);
    // console.log(result);