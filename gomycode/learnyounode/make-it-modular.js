const myModule= require('./mymodule')

const fs=require('fs');
const path=require('path');

const directory=process.argv[2];
const extension=process.argv[3];


myModule(directory,extension,(err,filteredlist)=>{
    if(err) return console.log(err);
    filteredlist.forEach(file=>{
        console.log(file);
    })
})