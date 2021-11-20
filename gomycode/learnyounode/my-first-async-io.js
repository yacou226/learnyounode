var fs = require('fs')  

fs.readFile(process.argv[2],'utf-8',function (err,string) {
    if(err)return console.log("erreur");
    var resultat=string.toString().split('\n').length-1;
    console.log(resultat);
})
