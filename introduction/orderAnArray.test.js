let {order} = require("./orderAnArray.js")


test("the zeros should be the last in the array", () => {
    let arr = [0, 0, -10, 4, 0];
    let result = order(arr)
    expect(result).toEqual([-10, 4, 0, 0, 0]);
});