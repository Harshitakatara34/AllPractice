// *5)  Check for Balanced Brackets in an expression (well-formedness)*

// **Input: exp = “[()]{}{[()()]()}” **Output: Balanced

// **Input: exp = “[(])” **Output: Not Balanced


function Paranthesis(input) {
    var str = input;
    var stack = [];
    var flag = true;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
        stack.push(str[i]);
        continue;
      }
      if (
        (str[i] === ")" && stack[stack.length - 1] === "(") ||
        (str[i] === "]" && stack[stack.length - 1] === "[") ||
        (str[i] === "}" && stack[stack.length - 1] === "{")
      ) {
        stack.pop();
        continue;
      }
      if (str[i] === ")"  || str[i] === "]" || str[i] === "}") {
        flag = false;
      }
    }
  
    if (stack.length === 0 && flag) {
      console.log("balanced");
    } else {
      console.log("unbalanced");
    }
  }