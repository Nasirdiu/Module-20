//odd number convert
function odd(num) {

    if (num % 2 != 0) {
        return true;
    }
    return false;
}

const myOdd = 51;
const total = odd(myOdd);
console.log('This number of odd :', total);

// event number convert

function even(num1){

    if(num1 % 2 == 0){
        return true;
    }
    return false;
}

const myEvent=51;
const totals=even(myEvent);
console.log('This a event number',totals);
