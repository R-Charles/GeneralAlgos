function disemvowel(str) {
    // [group of items], ^ to say not these ones, g for global instead of just first, i for case insensitive
    let regex = /[^aeiou]/gi
    //returns an array
    let novowels = str.match(regex)
    //we join the array
    return novowels.join('')
  }
  