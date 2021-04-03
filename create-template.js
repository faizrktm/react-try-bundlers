const fs = require('fs');

const htmlContent = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>React Tuple and Record</title></head><body><div id="root"></div> <script src="./index.js" type="module" defer></script> </body></html>';
fs.writeFile(process.cwd() + '/dist/index.html', htmlContent, 'utf8', (error) => {
  console.error(error);
});