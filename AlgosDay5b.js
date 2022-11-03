function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints);
    let allPoints = classPoints;
    let sumPoints = allPoints.reduce((sum, current) => sum + current,0);
    let midPoints = Math.floor(sumPoints / allPoints.length);

    if(yourPoints >= midPoints) {
        return true;
    }else{
        return false;
    }
    };


    console.log(betterThanAverage([50],[9]))