const validate = require('sourcemap-validator'),
    fs = require('fs');

console.log('Valdating...');
const result = validate(
    fs.readFileSync('./out/input.js', 'utf-8'),
    fs.readFileSync('./out/input.js.map', 'utf-8'),
    { 'input.js': fs.readFileSync('input.js', 'utf-8') }
);

console.log(result);
