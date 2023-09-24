// Express.js middleware are functions that process incoming HTTP requests and responses, 
// enabling tasks like authentication and data manipulation within web applications.









// Express.js middleware are like mini-programs that can be inserted into the 
// flow of a web application to perform various tasks such as authentication, logging, 
// or data processing during the handling of a request.













// const express = require('express');
// const app = express();

// // Custom middleware function
// const logRequest = (req, res, next) => {
//   console.log(`Received a ${req.method} request at ${req.url}`);
//   next(); // Call next() to pass control to the next middleware in the chain
// };

// // Using the middleware
// app.use(logRequest);

// // Route handling
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
