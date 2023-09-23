// Functional Components:
// Use for simplicity, reusability, and performance.
// Ideal for managing state with hooks, using the Context API, and server-side rendering.




// Class Components:
// Use for complex state management, lifecycle methods, or when working with legacy code.
// Suitable for ref forwarding, Higher Order Components (HOCs), and inheritance, but consider functional 
// components and hooks for new projects.




// 1. State: If a component needs to maintain internal state or lifecycle methods, a class component is required.
// 2. Performance: Functional components are generally faster than class components due to their simpler implementation 
//                and lack of overhead associated with class-based components. However, in cases where a component needs 
//                to manage state or perform complex calculations, the difference in performance is negligible.
// 3. Readability: Functional components are often easier to read and understand, especially for simple components 
//                 that only render based on props. Class components can become more complex, especially as they 
//                 grow in size and include more lifecycle methods.
// 4. Reusability: If a component needs to be shared or reused in multiple places, it is often easier to implement 
//                 it as a functional component.