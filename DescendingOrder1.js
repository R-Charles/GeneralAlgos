function descendingOrder(n){
    //...
    // let descending = []
    let NewNum = n.toString().split("") //"1021"
    // for (let v=0; v < NewNum.length; v++){
        
    //     if (NewNum[v] < descending[-1]){
    //         descending.push(NewNum[v])
    //     }else{
    //         descending.unshift(NewNum[v])
    //     }
    // }
    NewNum.sort(function(a,b ){return b-a});
    return NewNum
}
    console.log(descendingOrder(1021))

