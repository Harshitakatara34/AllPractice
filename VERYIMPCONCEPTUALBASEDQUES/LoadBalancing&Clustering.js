// Load Balancing:
// Imagine you run a popular online store. When many customers visit your website at the same time,
// a single server might struggle to handle all the requests.

// Example:
// You have three servers (A, B, C). A load balancer acts like a traffic cop that directs each
// incoming request to one of the three servers, ensuring none of them get overloaded. So,
// if 300 people visit your site, the load balancer might send 100 to Server A, 100 to Server B,
// and 100 to Server C.

// Clustering:
// Clustering is like having a team of servers working together as a single unit. If one server fails,
// the others pick up the slack without any downtime.

// Example:
// Imagine you have three servers (X, Y, Z) clustered together. They share the same data and work together.
// If Server X goes down, Servers Y and Z continue to handle all the traffic, so your website keeps running
// smoothly without anyone noticing a problem.

// In summary:

// Load Balancing helps distribute the load evenly across multiple servers.
// Clustering ensures that even if one server fails, the others in the cluster keep the application running
// smoothly.
