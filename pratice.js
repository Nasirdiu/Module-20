

//farenheit to celcius conver

function  farenheitCelcius( num){
    const farenheit= (num -32) * 5/9;
    return farenheit;
}

const farenNum=1;
const total =farenheitCelcius(farenNum);
console.log('farenheit F :',total);
