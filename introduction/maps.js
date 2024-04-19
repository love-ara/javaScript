let map = new Map();
//use set instead of add
map.set("Ara", "posh");
map.set("Ayo", "poise");
map.set("Damola", "presh");

console.log(map.has("Damola"))
//to get keys
console.log(map.get("Ara"))
//loop to get values
for(let [key, value] of map){
    console.log(key, " : ", value);
}

//for each
map.forEach((key, value) => {
console.log(key, " : ", value)
});

map.forEach((value, key) => {
    console.log(value, " : ", key)
    });
