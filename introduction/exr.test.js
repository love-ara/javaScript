const {getGrade} = require("./exr.js")

test("Get grade", () =>{
 const studentScores = [95, 78, 85, 60, 45, 92]
let answer = getGrade(studentScores);

expect(answer).toStrictEqual(["A", "C", "B", "D", "F", "A"])
});


