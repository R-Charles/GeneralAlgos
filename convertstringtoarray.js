function disemvowel(str) {
    // [group of items], ^ to say not these ones, g for global instead of just first, i for case insensitive
    let regex = /[^aeiou]/gi
    //returns an array
    let sansvowels = str.match(regex)
    //we join the array
    return sansvowels.join('')
}


//   https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript