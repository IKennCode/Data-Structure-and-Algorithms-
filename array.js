//Array Declaration
// let arr = new Array();


//object can be access by the arr below l12.
// let person = {
//     name: "kenneth",
//     age: 23,
// }

// the most easiest way to declare array below
// let arr = ["gaming", "basketball","eating", "badminton", person];
// console.log(arr[4].age);
// console.log(arr.length)




// ***********************************************************************************************************

// Arrays- Add and Remove elements

// let person = {
//         name: "kenneth",
//         age: 23,
//     }

// let arr = ["apple", "banana", "cherry", person];

//using push method, it will add an element orange to the end part of an array
// arr.push("orange");

//using pop method it will remove 2 element from right to left depending how many pop method 
// arr.pop();
// arr.pop();



// using unshift method, it will push the element on the first line of an element
// arr.unshift("orange");
// using shift method, it will remove the element 
// arr.shift();
// console.log(arr);


// ****************************************************************************************************

// Looping an Array

// let arr = ["orange", "apple", "cherry", "banana"];

// for (let i=0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// while loop
// let i = 0;
// while (i < arr.length) {

//     console.log(arr[i])
//     i++;
// }


// Inbuilt Loop Methods
let numbers = [1, 2, 3, 4, 5];

// Map in Javascript
numbers.map((item, index, array) => {
    // return item + 3;
    console.log (item, index, array)
})
// console.log (item, index, array)



