// home work
// 1 example

// function arrAbc(arr) {
//     let couple=[]
//     let coupleSum=0
//     let newArr=[]
//     for (const element of arr) {
//         if(Math.abs(element)%2==0){
//             coupleSum+=element*element
//             couple.push(element*element)
//         }else{
// newArr.push(Math.abs(element))
//         }
//     }
//     return {couple,coupleSum,newArr}
// }
// console.log(arrAbc([-3,8,44,5,-6,4]));

// 2 example
// function checkTwoArr(arr1,arr2) {
// for (let i = 0; i < arr1.length; i++) {
   
//     if (arr2[i]==arr1[i]) {
//         return false
//     }
// }
// return true
// }
// console.log(checkTwoArr([8,8,9],[8,9]));

// 3 example

// function sortArr(arr1,arr2,str) {
//     let result1=arr2.concat(arr1).sort((a,b)=>a-b)
//     let result1Reverse=arr2.concat(arr1).sort((a,b)=>b-a)
// let newArr=[]
    
//     for (let i = 0; i < result1.length; i++) {
//        newArr.push(str)
//     }
//     return {result1,result1Reverse,newArr}
// }
// console.log(sortArr([1,10],[2,3,4],"nodejs"));

// 4 example

// function numberSplit(num) {
//     let newArr=[]
//     let numElem1=Math.floor(num/2)
//     newArr.push(numElem1)
//     let numElem=num-numElem1
//     newArr.push(numElem)
//     return newArr
// }console.log(numberSplit(-9));

// 5 example

// function sortByLength(arr) {
//     return arr.sort((a,b)=>a.length-b.length)
    
// }console.log(sortByLength(["a","ccc","dddd","bb"]));

// 6 example

// function sortedArr(arr) {
//     let newArr=[]
//     let count=[]
//     for (const element of arr) {
//         newArr.push(element*element)
//     }
//     for (const key of newArr) {
//         if(key%2==0){
//             count.push(key)
//         }
//     }
//     count.sort((a,b)=>a-b)
//     return {newArr,count}
// }console.log(sortedArr([5,8,4,6,9,7]));

// 7 example
// function sortedArr(arr) {
//     let newArr=[]
//     let count=[]
//     for (const element of arr) {
//         newArr.push(element*element)
//     }
//     for (const key of newArr) {
//         if(key%2==0){
//             count.push(Math.pow(key,2))
//         }
//     }
//     console.log(count);
    
//     return newArr
// }console.log(sortedArr([5,8,4,6,9,7]));

// 8 example

// function reversArr(arr) {
//    let newArr=arr.reverse() 
// for (const key of newArr) {
//     newArr[key.reverse()]
// }
// return newArr
// }console.log(reversArr([[1,2,3],[4,5,6],[7,8,9]]));

// 9 example

// function changeNumberToString(num1,num2) {
//     let newStr=[]
//     let obj={
//         0: "null",
//         1:"one",
//         2: "two",
//         3: "three",
//         4: "four",
//         5: "five",
//         6: "six",
//         7: "seven",
//         8: "eight",
//         9: "ten"
//     }
//     for (let i = num1; i <= num2; i++) {
        
//         if (obj[i]) {
//             newStr.push(obj[i])
//         }
        
//     }
//     console.log(newStr);
    
//     let reverseStr=newStr.reverse()
//     return reverseStr
// }console.log(changeNumberToString(1,5));

// additional example

// 13-17
// 1 example

// function uniqElemArr(arr1,arr2) {
//     let result=[]
//     for (const key of arr1) {
//         if(!arr2.includes(key)){
// result.push(key)
//         }
//     }
//     return result
// }console.log(uniqElemArr([5,7,8,9],[1,2,5,8,4]));

// 2 example

// function arrAinZ(arr) {
//     return arr.sort((a,b)=>a.localeCompare(b))
    
// }console.log(arrAinZ(["Salom","Alo","Imtixon","Dastur","Xayot","Go'zal"]));

// 3 example

// function elemSumArr(arr) {
//     let obj={}
//    for (const key of arr) {
//        obj[key]=(obj[key] ||0)+1;
    
//    }
//     return [arr,arr.map(el=> `${el}(${obj[el]})`)]
        
    
// }console.log(elemSumArr(["a","b","a"]));
