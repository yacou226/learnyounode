const fs=require('fs');
const path=require('path');

const directory=process.argv[2];
const extension='.'+process.argv[3];

fs.readdir(directory,function (err,lists) {
    if(err) return console.log('erreur');

    lists.forEach(function (file) {
        if (path.extname(file)=== extension) {
            console.log(file);
            
        }
    })
})