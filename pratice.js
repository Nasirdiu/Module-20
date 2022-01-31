//farenheit to celcius conver

function  farenheitCelcius( num){
    const farenheit= (num -32) * 5/9;
    return farenheit;
}


const total =farenheitCelcius(1);
console.log('farenheit F :',total);
