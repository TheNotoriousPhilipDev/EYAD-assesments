// difference between regular functions and arrow functions 
/*Regular functions have their own this context. And this is determined dynamically depending on how you call or execute the function. Arrow functions, on the other hand, do not have their own this context. 
Instead, they capture the this value from the surrounding lexical context in which the arrow function was created. */

function regularFindNumber(num1) { // here's the regular function
    const result = num1 % 2  
    let regularMessage = "";
    if (result == 0) {
        regularMessage = "even"
    }else {
        regularMessage = "odd"
    }

    return regularMessage
  }
  
  // now Ima transform it into an arrow function

  const arrowFindNumber = (num1) =>{
    const result = num1 % 2  
    let arrowMessage = "";
    if (result == 0) {
        arrowMessage = "even"
    }else {
        arrowMessage = "odd"
    }

    return arrowMessage
    
  }
  
  
  console.log(regularFindNumber(2))
  console.log(arrowFindNumber(9))

