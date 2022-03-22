//bai1
function sumArray(mang){
    let sum = 0;
    for (let i = 0; i < mang.length; i++){
        sum += mang[i];
    }
     
    return sum;
}
 
let mang = [0, 5, 4, 2, 8];
console.log(sumArray(mang)); 

//bai2
 const person = [
    { name: 'John', age: 24 },
    { name: 'Pete', age: 25 },
    { name: 'Mary', age: 28 }
]

const ten = person.map(elem => (
  {
    name: elem.name
  } 
));
console.log(ten);

//bai3
arr1 = ['John', 'Pete', 'Mary']
arr2 = ['Mary', 'Henry', 'Harry']
var arr3 = Object.assign(arr1,arr2);

const uniqueSet = new Set(arr3);
console.log(uniqueSet);