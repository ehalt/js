//https://www.codewars.com/kata/643af0fa9fa6c406b47c5399/javascript 

function sol(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0 ) {
            sum += i;
        }
    }
    return sum;
}




// another solution 

function solution(number){
    return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}



