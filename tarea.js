const fs = require("fs");





fs.readFile("texto.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let data1 = data;
  
let j = fibo(data1);
console.log(j);

});


function fibo(n){
  if (n == 0){
      return 0;
  }
  if (n == 1){
      return 1;
  }
  else {
      return fibo(n-1) + fibo(n-2);

  }


}
