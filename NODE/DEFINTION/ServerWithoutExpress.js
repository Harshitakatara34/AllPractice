// To create a web server in Node.js without using Express, you can use Node.js's built-in http module. 
// Here's a short example:


// http - get method

// const http = require('http')
// const server = http.createServer((req, res)=>{
//     if(req.method==='GET' && req.url==='/'){
//         res.writeHead(200,{'Content-Type': 'text/plain'})
//         res.end('Server is running\n')
//     }else{
//         res.writeHead(400, {'Content-Type': 'text/plain'})
//         res.end('Error Not found\n')
//     }
// })
// // Listen on port 3000
// server.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });