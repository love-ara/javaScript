const {populate} = require("./populateABoard");

test("generates correctly", () => {
    let length = 3;
    let width = 3;
    let obj = [
        {row : 0, column: 0, value: "X"},
        {row : 0, column: 1, value: "X"},
        {row : 0, column: 2, value: "O"},
        {row : 1, column: 0, value: "O"},
        {row : 1, column: 2, value: "X"},
        {row : 2, column: 0, value: "X"},
        {row : 2, column: 1, value: "O"},
        {row : 2, column: 2, value: "O"},
    ];

    let expected = [ [ 'X', 'X', 'O' ], [ 'O', ' ', 'X' ], [ 'X', 'O', 'O' ] ];

    expect(populate(length, width, obj)).toEqual(expected);
});