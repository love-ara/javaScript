function addNumbers(x,y){
    let answer = x + y;
    return answer
}

// console.log(addNumbers(2,3))

function evenNumbers(numbers){
    let res = numbers.filter(number => number%2==0);
    return res;
}

module.exports = {addNumbers, evenNumbers}  