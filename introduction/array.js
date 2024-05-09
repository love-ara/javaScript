function frequency(numbers){
    const fre  = {}
    for(let i = 0; i < numbers.length; i++){
        let count = 0;
        for(let j = 1; j < numbers.length; j++){
            if(numbers[i] === numbers[j]){
                count++;
            }
        }
        fre[numbers[i]] = count;
        }
        console.log(fre);
        return fre;
}

module.exports = {frequency}