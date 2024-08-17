// Understanding Client-Side Rendering (CSR) and Server-Side Rendering (SSR) in Simple Terms
// Client-Side Rendering (CSR)
// Client-Side Rendering (CSR) is a method where the browser (client) handles the rendering of the web page.
// The server sends a minimal HTML file and a JavaScript bundle to the client.
//  The JavaScript then takes over and dynamically generates the content in the browser.

// How CSR Works:

// Initial Request: The browser requests the page from the server.
// Response: The server sends a basic HTML file with a link to a JavaScript file.
// JavaScript Execution: The browser downloads and executes the JavaScript file.
// Rendering: The JavaScript dynamically builds the HTML content and renders it on the page.
// Pros:

// Fast subsequent navigation within the application.
// Rich interactivity and dynamic content.
// Cons:

// Slower initial load time because the browser must download and execute JavaScript before rendering content.
// Poor SEO because search engines may not see the dynamically generated content.
// Example of CSR:

// HTML file (index.html):

// html
// Copy code
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Client-Side Rendering</title>
// </head>
// <body>
//   <div id="root"></div>
//   <script src="bundle.js"></script>
// </body>
// </html>
// JavaScript file (main.js):

// javascript
// Copy code
// // Assume we use a library like React
// import React from 'react';
// import ReactDOM from 'react-dom';

// const App = () => (
//   <div>
//     <h1>Hello, Client-Side Rendering!</h1>
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById('root'));
// Server-Side Rendering (SSR)
// Server-Side Rendering (SSR) is a method where the server generates the full HTML for a web page
// and sends it to the browser. The browser displays this HTML directly,
// and JavaScript takes over any dynamic functionality.

// How SSR Works:

// Initial Request: The browser requests the page from the server.
// Response: The server renders the full HTML for the page and sends it to the browser.
// Rendering: The browser displays the HTML immediately.
// Hydration: JavaScript downloads and attaches event handlers to make the page interactive.
// Pros:

// Faster initial load time because the HTML is fully rendered and ready to display.
// Better SEO (Search Engine Optimization) because search engines can see the fully rendered content.
// Cons:

// More load on the server to render the pages.
// Initial rendering might be slower for complex pages.
// Example of SSR:

// Server code (server.js):

// javascript
// Copy code
// const express = require('express');
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// const App = require('./App').default;

// const app = express();

// app.get('*', (req, res) => {
//   const appString = React

// I
