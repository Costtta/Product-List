// let myFriends = ["ahmed", "mohamed", "ezzat", "abdelmomen", "haron"]

// console.log(myFriends)

// let index = myFriends.indexOf("mohamed")
// console.log(index)

// const total = (num1, num2) => {
//     return num1 + num2 
// }

// console.log(total(3,3))

// const total = name => {
//     return console.log(`hello ${name}`)
// }

// total('ahmed')

// function declaration and arrow functions
// readable function
// DOM

// console.log(document.body.innerHTML)

// console.log(document.body.innerText)

// console.log(document.body.textContent)
// identation (spaces between codes);

// console.log(document.property)
// console.log(document.methodes)

// console.log(divElement)

// object in js


// let numbers = [
//     {name: "Ahmed", description: "bad boy", price: 1000, id:1},
//     {name: "mohamed", description: "angry man", price: 500, id: 2},
//     {name: "mahmoud", description: "gamer guy", price: 3000, id: 3}
// ]
// ;


// let test = function (products) {
//     return products.sort((a,b) => a.price - b.price)
// }

// console.log(test(numbers))

let test = [
    {name: "ahmed", price: 10, description: "son"},
    {name: "mohamed", price: 30, description: "father"},
    {name: "ezzat", price: 50, description: "grandfather"}
]

function searchForText(products,searchText) {
    return searchText = products.filter(item => indexOf(item.description)) 
}

let result = searchForText()
console.log(result)

// function searchTextInArray(arr, searchText) {
//     // Use filter to find elements containing the search text
//     const filteredResults = arr.filter(item => item.includes(searchText));
//     return filteredResults;
//   }
  
//   // Example usage
//   const myArray = ['apple', 'banana', 'cherry', 'date'];
//   const searchTerm = 'banana';
//   const results = searchTextInArray(myArray, searchTerm);
  
//   console.log('Matching results:', results);