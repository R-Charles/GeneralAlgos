var fourSum = function(nums, target) {
    //Outputs: an array of all the Unique quadruplets (an array of arrays size 4)
    //Inputs: an array nums of n integers and a target sum
    //Constraints: a, b, c, and d are Distinct
    //Examples and edge cases: [2,2,2,2,2], 8 => [[2,2,2,2]]
    //[1,0,-1,0,-2,2], 0 => [[-2,-1,1,2,], [-2,0,0,2],[-1,0,0,1]]
    // what to do if cannot reach target with given nums? => return empty array[[]]
    //lets figure out all our combinations, n choose 4, 4!=24
    let top = factorial(nums.length);
    let bottom = factorial((nums.length -4))*24;
    let combinations = top/bottom;
    let quadruplets = [];//we'll populate this in the while loop somehow
    let solutions = new Set(); //we'll populate this in the for loop that follows the while
    let i = 0;//we'll use this in the while loop to create our combinations

    while(i < combinations){
        let chunk = [];
        let index;
        for(let k = 0; k < 4; k++){
            if(i+k >= nums.length){
                index = (i+k)%nums.length;
            }else{
                index= i+k
            }
            chunk.push(nums[index]);
        }
        quadruplets.push(chunk);
        i++;
    }//give us all the combinations and put them in our quadruplets array
    
    //for loop to check each total in the quadruplets array, if they hit the target, push them onto solutions arr
    //console.log(quadruplets);
    for(let j = 0; j < quadruplets.length; j++){
        if(quadruplets[j].reduce((prev,cur)=>prev+cur,0) === target){
            solutions.add(quadruplets[j])
        }
    }
    return Array.from(solutions);
};

var factorial = (num) =>{
    let countdown =Array.from({length: num}, (prev,i) => i + 1);
    return countdown.reduce((prev,cur)=>prev*cur,1);
}