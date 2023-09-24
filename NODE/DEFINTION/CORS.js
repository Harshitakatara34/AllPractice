// CORS is a browser security feature that manages which web pages can access resources on different domains, 
// preventing unauthorized cross-origin requests and enhancing web application security.





// const cors = require('cors');








// Scenario: Imagine you have a web application hosted on "https://example.com" that makes an HTTP request to retrieve data from "https://api.example.com," which is a different domain.

// Without CORS: Without CORS, web browsers, for security reasons, would block this request, 
// preventing your web application from accessing data from a different origin. You might see an error like 
// "Cross-Origin Request Blocked."

// With CORS: To enable the web application to access resources on "https://api.example.com," 
// the server at "https://api.example.com" can include CORS headers in its responses. These 
// headers specify which origins are allowed to access its resources.