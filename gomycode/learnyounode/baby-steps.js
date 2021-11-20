var sum=0;
for(i=2;i<process.argv.length ;i++){
   // console.log(process.argv[i]);
  // sum+=process.argv[i];
   sum+=parseInt(process.argv[i]);
  
    
}
console.log(sum);