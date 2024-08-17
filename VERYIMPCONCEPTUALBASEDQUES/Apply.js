function temp() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

temp.apply(null, [1, 2, 3, 4]);

// rate limiter in SiExpress.js
// const rateLimit = require("express-rate-limit");
// const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
// app.use(limiter);

// Practical Scenarios:
// How do you ensure that your application can handle a high number of requests?

// Use load balancing, clustering, caching, and optimize database queries.
// Describe how you would implement a rate limiter in an Express.js application.

// javascript
// Copy code
// const rateLimit = require('express-rate-limit');
// const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
// app.use(limiter);
