
function addToLastIndex(numbers){
let size = numbers.length;
let lastIndex = size - 1;

    for(let index = 0; index < size; index++){
       
        if(numbers[lastIndex] >= 9){
            numbers[lastIndex] = 0;

        }else{
            numbers[lastIndex] += 1;
        }
        return numbers;
    }

}






module.exports = {addToLastIndex}; 