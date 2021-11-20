
// const http=require()

// var bl =require('bl');
// const url=process.argv[2];

// http.get(url,(response)=>{
//  response.pipe(bl(function (err,data) {
//      if (err) {
//          console.error(err);
//      }
//      data =data.toString()
//      console.log(data.lenght);
//      console.log(data);
     
//  }))
// })

var http = require('http')
var bl = require('bl')
var url=process.argv[2]

http.get(url, function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err)
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})