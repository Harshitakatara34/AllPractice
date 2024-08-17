// To set up multiple servers in a Node.js backend, you typically need to use a combination of clustering and load balancing. Here's how you can do it:

// 1. Clustering with Node.js:
// Node.js has a built-in module called cluster that allows you to create child processes (workers) that share the same server port. This way, you can utilize multiple CPU cores to handle more requests simultaneously.

// Example:

// javascript
// Copy code
// const cluster = require('cluster');
// const http = require('http');
// const numCPUs = require('os').cpus().length;

// if (cluster.isMaster) {
//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`Worker ${worker.process.pid} died`);
//     // Optionally, you can fork a new worker here
//     cluster.fork();
//   });
// } else {
//   // Workers can share any TCP connection.
//   http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end('Hello from Node.js server!\n');
//   }).listen(8000);

//   console.log(`Worker ${process.pid} started`);
// }
// In this example:

// The master process forks multiple worker processes (one for each CPU core).
// Each worker runs an instance of the server and listens on the same port (e.g., 8000).
// Requests are distributed among the workers, effectively balancing the load across CPU cores.
// 2. Load Balancing with NGINX (External Load Balancer):
// You can use an external load balancer like NGINX to distribute incoming requests to multiple Node.js servers.

// Steps:

// Set up multiple Node.js servers on different ports, e.g., 8000, 8001, 8002.
// Install and configure NGINX as a reverse proxy to balance the load.
// NGINX Configuration Example:

// nginx
// Copy code
// http {
//     upstream myapp {
//         server 127.0.0.1:8000;
//         server 127.0.0.1:8001;
//         server 127.0.0.1:8002;
//     }

//     server {
//         listen 80;

//         location / {
//             proxy_pass http://myapp;
//             proxy_set_header Host $host;
//             proxy_set_header X-Real-IP $remote_addr;
//             proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
//             proxy_set_header X-Forwarded-Proto $scheme;
//         }
//     }
// }
// This configuration tells NGINX to distribute incoming HTTP requests across the Node.js servers running on ports 8000, 8001, and 8002.
// 3. Using a Cloud Service:
// If you're deploying on a cloud platform like AWS, GCP, or Azure, they provide built-in load balancing services. You can spin up multiple instances of your Node.js application and connect them to a load balancer service that handles traffic distribution.

// Summary:
// Clustering in Node.js allows you to utilize multiple CPU cores on a single machine.
// Load Balancing with NGINX or a cloud service distributes traffic across multiple instances of your Node.js application, potentially on different machines.
// These methods combined can create a scalable, resilient backend infrastructure capable of handling high traffic.
