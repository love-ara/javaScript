let {maxProduct} = require("./maxProductInArray.js")


test("max product of array", () =>{
let arr = [1, -5, -10, 4, 0];
let result = maxProduct(arr)
expect(result).toBe(50);
});