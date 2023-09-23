// // POST METHOD
// async function createData(){
//     try {
//       let res = await fetch(`http://localhost:9090/todos`, {
//         method: 'POST',
//         headers: { 
//           'Content-type': 'application/json',
//           'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImZpcnN0bmFtZSI6IkFkIiwibGFzdG5hbWUiOiJNaW5pc3RlciIsImVtYWlsIjoiYWRtaW5AbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRsTG01THA0MHVCUjlDVXJabjU4Q2RPbDh5dTVHcDJ1bUFPLjZseS52V2NaMGEwdlVLc0hpQyIsImF2YXRhciI6Imh0dHBzOi8vY2xvdWRmbGFyZS1pcGZzLmNvbS9pcGZzL1FtZDNXNUR1aGdIaXJMSEdWaXhpNlY3NkxoQ2taVXo2cG5GdDVBSkJpeXZIeWUvYXZhdGFyLzc2Mi5qcGciLCJ1c2VyTGV2ZWwiOjQsImNyZWF0ZWRBdCI6MTY3MDE2NTk4MDYzOCwiaWF0IjoxNjcwNDg3NDMwLCJleHAiOjE2NzA1MDkwMzB9.VtoT7t0WMMtfBAgiB8WowRi43yQOSQ0hsOhuB2OJ5WQ`
//         },
//         body: JSON.stringify({
//           userId: 48,
//           title: "New loyal Minskin",
//           completed: false
//         })
//       });
//       if (res.ok) {
//         let data = await res.json();
//         return data;
//       } else {
//         return `server responded with a ${res.status} error.`
//       }

//     } catch (error) {
//       return 'error';
//     }
//   }