function leper(year){
    if(year % 4 ==0){
        return true;
    }
    return false;
}

const leperYear=2023;

const total=leper(leperYear);
console.log('is a leper is year',total);