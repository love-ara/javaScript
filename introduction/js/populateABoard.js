
function populate(length, width, obj) {

let arr = Array.from({length}, () => Array(width).fill(" "));
obj.forEach(piece => arr[piece.row][piece.column] = piece.value);
    return arr;
}

let length = 3;
let width = 3;
let obj = [
    {row : 0, col: 0, value: "X"},
    {row : 0, col: 1, value: "X"},
    {row : 0, col: 2, value: "O"},
    {row : 1, col: 0, value: "O"},
    {row : 1, col: 2, value: "X"},
    {row : 2, col: 0, value: "X"},
    {row : 2, col: 1, value: "O"},
    {row : 2, col: 2, value: "0"},
];


module.exports = {populate};