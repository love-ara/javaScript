function order(array){
    let counter = 0;
    for(let index = 0; index < array.length; index++){
        if(array[index]!= 0){
            array[counter++] = array[index];
        }
    }
        while(counter < array.length){
            array[counter++] = 0;
        }
        return array;

    }


module.exports = {order};