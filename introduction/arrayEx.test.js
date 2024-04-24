let {addToLastIndex} = require("./arrayEx.js")

test("Add one to the last index", () =>{
    let arr = [5, 2, 3, 1, 2];
    let answer = addToLastIndex(arr);

    expect(answer).toEqual([5, 2, 3, 1, 3]);
});