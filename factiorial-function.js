
function factiorial(num){
    let facet=1;
    for(let i =1; i <= num ;i++){
        facet = facet *i;
    }
    return facet;
}

let number=factiorial(5);

console.log('This is a first number of:',number);

let number2=factiorial(7);
console.log('This is asecend number :',number2);

let number3=factiorial(3);
console.log('This is asecend number :',number3);