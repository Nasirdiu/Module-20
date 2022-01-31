//celcius to farenheit conversion
function celciusfarhanhide (num){

    const celcius= (num*9/5) +32;
    return celcius;
}

const celciusNum= 1;
const total= celciusfarhanhide(celciusNum);
console.log('celcius C',total);