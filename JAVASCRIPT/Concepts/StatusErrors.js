// Informational (1xx):

// 100 - Continue: The request has been received, and the client should continue sending the rest of the request.
// 101 - Switching Protocols: The server is switching to a different protocol, as requested by the client.
// Successful (2xx):

// 200 - OK: The request was successful, and the server has returned the requested data.
// 201 - Created: The request has resulted in the creation of a new resource on the server.
// 204 - No Content: The request was successful, but there is no data to return in the response body.
// Redirection (3xx):

// 301 - Moved Permanently: The requested resource has been permanently moved to a different URL.
// 302 - Found (or Temporary Redirect): The requested resource is temporarily available at a different URL.
// 304 - Not Modified: The client's cached version of the resource is still valid; no need to transfer it again.
// Client Errors (4xx):

// 400 - Bad Request: The request is malformed or has invalid syntax.
// 401 - Unauthorized: Authentication is required to access the resource.
// 403 - Forbidden: The server understood the request but refuses to fulfill it.
// 404 - Not Found: The requested resource could not be found on the server.
// 429 - Too Many Requests: The client has made too many requests in a given time frame.
// Server Errors (5xx):

// 500 - Internal Server Error: A generic error message indicating that something went wrong on the server.
// 502 - Bad Gateway: The server acting as a gateway or proxy received an invalid response from an upstream server.
// 503 - Service Unavailable: The server is currently unable to handle the request due to temporary overloading or maintenance.
// 504 - Gateway Timeout: The server acting as a gateway or proxy did not receive a timely response from an upstream server.