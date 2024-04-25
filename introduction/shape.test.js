const {Shape, Rectangle} = require("./shape.js");

test("create a new rectangle",()=> {
let rec = new Rectangle("rec", 4, 6);
let answer = rec.isSquare();
let area = rec.getArea();
expect(area).toBe(24);
expect(answer).toBe(false);
})