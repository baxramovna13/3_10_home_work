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
 
// 10-12 example

// 1 example

// function strNum(str) {
// return str.replace(/\d+/g,match=> String(Number(match)+1))
// }console.log(strNum("a1b2"));

// 2 example

// function strReverse(str) {
//     let arr=str.split(" ")
//     let result=""
//     for (const element of arr) {
//         result+=(element.split('').reverse().join(''))+" "
//     }
//     return result
// }console.log(strReverse("Hello world i lowe JS"));

// 3 example

// function wordLength(str) {
//     let newArr=str.split(" ")
//     let sum=0
//     for (let i = 0; i < newArr.length; i++) {
//        for (let j = i+1; j < newArr.length; j++) {
//        if(newArr[i].length===newArr[j].length){
//         sum++
//        }
//        }
//     }
//     return sum
// }console.log(wordLength("Hello world i lowe JS"));

// 5-9 example

// 1 example

// function twoElem(arr) {
//     let newArr=arr.split(' ')
//     let obj={}
//     for (const element of newArr) {
//         if(obj[element]){
//             obj[element]++
//         }else{
//             obj[element]=1
//         }
//     }
//     let result=[]
//     for (const key in obj) {
//        if(obj[key]>=2){
// result.push(key)
//        }
//     }
//     return [obj,result]
// }
// console.log(twoElem("Salom omadning kaliti bilim bilim Salom Salom"));

// // 2 example

// function strSort(str) {
//     return str.split(' ').sort((a,b)=>a.length-b.length)
// }console.log(strSort("Salom omadning kaliti bilim va Sabr"));

// 3example

// function newStr(str) {
//     let arr=str.split(' ')
//     let newStrRusult=""
//     for (let i = 0; i < arr.length; i++) {
//        newStrRusult+=arr[i][0]        
//     }
//     return newStrRusult
// }console.log(newStr("oz so'zla omad noil"));

// 4 example

// function strNum(str) {
//     let result=str.match(/\d+/g)
//     let result1=str.replace(/\d+/g,match=>String(Number(match)*Number(match)))
//     return [result,result1]
// }console.log(strNum("a2b3"));

// 5 example

// function strAOUIE(str) {
//     let str1=str.toLowerCase().split(' ')
//     let newArr=[]
//     for (let i = 0; i < str1.length; i++) {
//        if(str1[i][0]=="a" || str1[i][0]=="e" || str1[i][0]=="u" || str1[i][0]=="o" || str1[i][0]=="i"){
//         newArr.push(str1[i])
//        }
//     }
//     return newArr
// }
// console.log(strAOUIE("Ona alla uy doim dars el "));

