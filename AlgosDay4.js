/*CREATE A FUNCTION THAT TAKES IN 2 VARIABLES THAT RETURNS AN ARRAY OF NUMBER

*/

function countBy(x, n) {
    let z = [];
    for(let i = 1; i <= n; i++){
        z.push(x*i)

    }
    return z;
}
console.log(countBy(1,10))

// countBy(1,10) // [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) // [2,4,6,8,10]
