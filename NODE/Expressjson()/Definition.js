// app.use(express.json()) in the backend of a Node.js application is like teaching your server to 
// understand and handle data sent by clients in a structured format called JSON.



//Before sending to server
// {
//     "name": "John Doe",
//     "email": "johndoe@example.com",
//     "message": "Hello, server! How are you?"
//   }
  


//After sending to server
// {
//     name: 'John Doe',
//     email: 'johndoe@example.com',
//     message: 'Hello, server! How are you?'
//   }
  

// express.json() in a Node.js application is a middleware that helps your server understand 
// and work with data that comes from clients in JSON format. When data is sent from a client 
// to your server in JSON format, express.json() parses it and converts it into a JavaScript 
// object so that your server can easily work with the data as a JavaScript object. 
// It essentially transforms JSON data into a format that your server can use and process effectively.