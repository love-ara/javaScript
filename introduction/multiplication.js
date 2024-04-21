function multiplication(numbers){
    for(let index = 1; index <= numbers; index++){
        let row = "";
        for(let index2 = 1; index2 <= numbers; index2++){
            let product = index * index2;
            row += `${index} * ${index2} = ${product}\t`;
        }
        console.log(row);
    }
}

multiplication(10);