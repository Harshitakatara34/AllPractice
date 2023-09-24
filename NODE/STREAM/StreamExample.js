
// without Stream

const fs = require("fs");
const http = require("http")

const server = http.createServer();

server.on("request", (req, res)=>{
    var fs = require ("fs")
    fs.readFile("input.txt", (err, data)=>{
        if(err) return console.error(err);
        res.end(data.toString());
    })
})

server.listen('8000', '127.0.0.1')


// 2. way
// Reading from a Stream
// Create a readable stream
// Handle stream events = >(data, end and error) 


// Use Stream

// Handle stream events → data, end, and error

const rstream = fs.createReadStream("input.txt")
rstream.on("data", (chunkdata) => { 
    res.write(chunkdata);
});
rstream.on("end", () => {
res.end();
});
rstream.on("error", (err) => {
console.log(err);
res.end("file not found");
});

// Real worrld example - (youtube, Netflex etc.)
// We dont have to download the full video we can watch
//  it by getting data in chunks

