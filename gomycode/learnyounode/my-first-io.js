
var fs = require('fs')  
       
var buffer = fs.readFileSync(process.argv[2]);
var resultat=buffer.toString().split('\n').length-1;
console.log(resultat);


