// //1. change array to object

// //1 way
// const arr = [["Apple", "Sweet"], ["Book", "Self-Help"], ["Bus", "Trip"]]

// const obj = {...arr}
// console.log(obj)

// ////2 way
// const arr = [["Apple", "Sweet"], ["Book", "Self-Help"], ["Bus", "Trip"]]

// const obj = Object.assign({},arr);
// console.log(obj);

// ///3 way
// const arr = [["Apple", "Sweet"], ["Book", "Self-Help"], ["Bus", "Trip"]]

// const obj = {}

// arr.forEach((key,value) => {
//     obj[value]= key
// })
// console.log(obj)


// // 2 convert object to array

// // 1 way
// const obj = {
//     name: "User",
//     age: 25,
//     city: "Ahmedabad"
// }

// const a = Object.keys(obj)
// const b = Object.values(obj)
// console.log(a)
// console.log(b)


// // 2 way
// const obj = {
//     name: "User",
//     age: 25,
//     city: "Ahmedabad"
// }
// let result  = Object.keys(obj).map(function(key) {  
//  return [Number(key), obj[key]];  
// });  

// console.log(result)


// // 3 way
// const obj = {
//     name: "User",
//     age: 25,
//     city: "Ahmedabad"
// }
// //var arr = Object.entries(obj);

// console.log(arr)


// /////////3 Change the object(keys being the values and vice versa)

// //1 way
// const obj = {
//     Do: "I",
//     JS: "know",
//     NodeJs: "and"
// }
// let change = {};
// for(let key in obj){
//     change[obj[key]]=key;
// }
// console.log(change)


// //2 way 

// const obj = {
//     Do: "I",
//     JS: "know",
//     NodeJs: "and"
// };

// let swapobj = Object.entries(obj).reduce((acc,[key,valule])=>{
//   acc[valule]=key;
//   return acc;
//   },{});

//   console.log(swapobj)
  


// /// 3 way

// const obj = {
//     Do: "I",
//     JS: "know",
//     NodeJs: "and"
// }
// function swap(){
//     var change = {};
//     for(var key in obj){
//       change[obj[key]] = key;
//     }
//     console.log(change);
//   }

//   swap()




