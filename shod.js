function shod(num,num1,num2){
    const multiple=num*num1*num2;
    const vag =multiple /100;
    return vag;
}

const profit=100;
const loss =5;
const lav =10;
const total =shod(profit,loss,lav);
console.log(total);


function interest(money, year, parcnet) {
    var profite = money * year * parcnet;
    var total = money + profite;
    return total;
}
var principle = 100; // Principle Money
var time = 5; // Time of loan
var rate = 10 / 100; // Rate of lone per year;
var result = interest(principle, time, rate);
console.log(result);