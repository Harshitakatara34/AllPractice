// Middleware chaining in Express is like passing your request through a series of checkpoints,
// where each checkpoint (middleware) can perform a specific task before reaching your destination
// (route handler). It helps structure and reuse code for various tasks in web applications

// Request --> middleware1 --> middleware2 --> route handler --> Response




// Example====>
// const express = require('express');
// const app = express();
// // Middleware 1
// app.use((req, res, next) => {
//   console.log('Middleware 1');
//   next();
// });
// // Middleware 2
// app.use((req, res, next) => {
//   console.log('Middleware 2');
//   next();
// });
// // Route handler with middleware chaining
// app.get('/route', (req, res) => {
//   console.log('Route Handler');
//   res.send('Response');
// });
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });






// Middleware 1 and Middleware 2 are defined and mounted using app.use().
// When a request matches the "/route" route, Express will execute Middleware 1,
// then Middleware 2, and finally the Route Handler in sequential order.
