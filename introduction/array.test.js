let {frequency} = require("./array.js");

test("the number of occurence", ()=>{
    let arr = [1, 2, 2, 2, 1, 3];
    let answer = frequency(arr);
    console.log(answer);

    expect(answer).toEqual({ '1': 1, '2': 3, '3': 1 });
    expect(frequency([1, 2, 2, 2, 1, 3])).toEqual({ '1': 1, '2': 3, '3': 1 });
});