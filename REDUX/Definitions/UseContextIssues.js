// Limited Scalability: useContext can become complex to manage as your app grows.

// Potential Performance Challenges: All components consuming the context re-render when it changes, which can impact performance.

// Lack of Middleware: It lacks built-in support for handling side effects like asynchronous actions.

// Debugging Complexity: Debugging can be harder, making it challenging to trace state changes and re-renders.

//Performance issue (it will re-render again and again whwenever the value changes)