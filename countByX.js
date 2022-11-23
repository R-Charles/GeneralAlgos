function countBy(x, n) {
    //output, an array of length n with multiples of x
    // input, x to count by, and n for our array length
    // constraints, none we're aware of.
    //examples, they be to the left...
    let z = [];
    let multiplier = 1;
    //continue adding values to our array z until it reaches length n
    while(z.length < n){
      //we add the multiple of x we're on
      z.push(multiplier*x);
      //we increment the multiple for the next value
      multiplier++;
    }
    //return our array, z with n multiples of x
    return z;
  }
  