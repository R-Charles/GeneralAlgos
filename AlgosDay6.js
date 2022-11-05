function FirstReverse(str) { 
    let newSTR = str.split('').reverse();
        let newJoin = newSTR.join('')
      // code goes here  
        return newJoin;
    }
    // keep this function call here 
    console.log(FirstReverse(readline()));