// const wrapper = document.getElementById("wrapper");
// console.log(wrapper);

// const title = document.getElementsByClassName("title");
// console.log(title);

// const tagName = document.getElementsByTagName("header");
// console.log(tagName);

// console.log(Array.isArray(Array.from(title)))

// const bookList = document.querySelector("#book-list")
// console.log(bookList);
const bookList = document.querySelectorAll("#book-list ul li");
bookList.forEach((book) => {
    console.log(book);
})

for(const element of bookList){
    console.log(element);
}

console.log(Array.isArray(bookList));
//console.log(bookList);