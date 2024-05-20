let {maxProduct} = require("./maxProductInArray.js")


test("max product of array", () =>{
let arr = [1, -5, -10, 4, 0];
let result = maxProduct(arr)
expect(result).toBe(50);
});

test("max product of array", () => {
    let arr = []; 
    let t = () => {
        maxProduct(arr); 
    };

 
    expect(t).toThrow(Error);
    expect(t).toThrow("Array should have more than two elements");
});

