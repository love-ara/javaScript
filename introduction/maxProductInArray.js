function maxProduct(arr){
    if(arr.length < 2) throw new IllegalArgumentException("Array should have more than two elements.");
    let max = arr[0] * arr[1];
    for (let index = 1; index < arr.length; index++) {
        for (let indexTwo = index + 1; indexTwo < arr.length; indexTwo++) {
            let product = arr[index] * arr[indexTwo];
            if (product > max) max = product;
        }
    }
    return max;

}

module.exports = {maxProduct};
