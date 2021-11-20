const salutation=require('./salutation');
const alloh=require('./modudeUnique');

const nom=process.argv[2];

console.log('Autre opération');

salutation.direBonjour(nom);
alloh()
salutation.aurevoir(nom)

