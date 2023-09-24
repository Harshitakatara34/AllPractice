// dotenv: Manages environment variables in Node.js from a configuration file (.env).
//  .env to keep sensitive data and configuration separate from your code.





// PROCESS
// 1.npm i dotenv

// 2.create env file (ex==>PORT=3000
//     DATABASE_URL=mongodb://localhost/mydatabase
//     API_KEY=abcdef123456)

// 3.import env file data (require('dotenv').config();)

// 4.Access the data(const port = process.env.PORT;
//     const databaseUrl = process.env.DATABASE_URL;
//     const apiKey = process.env.API_KEY;)