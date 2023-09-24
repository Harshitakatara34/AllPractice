const fs = require('fs');

fs.access('example.txt', fs.constants.F_OK, (err) => {
  if (err) {
    console.error('File does not exist.');
    return;
  }
  console.log('File exists.');
});
