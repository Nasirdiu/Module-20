function factiorial (number){
    let fact=0;
    let i=0;
    while(i<=number){
        fact = fact +i;
        i++;
    }
    return fact;
}

let total = factiorial(5);
console.log(total);

let total1 = factiorial(3);
console.log(total1);
