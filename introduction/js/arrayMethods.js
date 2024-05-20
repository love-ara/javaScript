let arr = [1, 3, 4, 5, 6]

// arr.forEach((num)=>{
//     console.log(num*2);
// })
let arr2 = []

// arr.forEach((num) => {arr2.push(num * 2);})

// let answer = arr.map((num) => num %2 == 1)
// let answer = arr.map((num) => num * 2)
// answer.filter((num) => console.log(num%2 == 0))
let answer = arr.filter((num) => num %2 == 0).map(num => num * 10)
console.log(answer)
//console.log(answer)
// console.log(arr2)

// map, iterating through an array
