function testFactorial(a){
  let factorial = 1;
  
  for(let i = 1; i <= a; i ++){
     factorial *= i;
  }
  return factorial;
}
console.log(testFactorial(5))

/*function testFactorial(a) {
    var x = 1;
    // Put your code here
    for(let i = 1; i <= a; i ++){
        x *= i; 
    }
    return x*2; // to get double of factorial of 5
} 

*/