//forEach method
let arr=[1,2,3,4,5];
function print(el){
    console.log(el);
}
arr.forEach(print);
//or
arr.forEach(function(el){
    console.log(el);
});
//Map
let newArr=[1,2,3,4,5];
let double=newArr.map(function(el){
    return el*2;
});
//
let student=[
    {
        name:"shuvo",
        marks:97,
    },
    {
        name:"nujula",
        marks:99,
    },
    {
        name:"herro",
        marks:33,
    }
]
let gpa=student.map((el1)=>{
    return el1.marks/10;
});
console.log(gpa);
//filter
let num=[1,2,3,4,5,1,6,3,7,9,8];
let even=num.filter((el)=>{
    return(el%2==0);
});
//or
let num1 = [1, 2, 3, 4, 5, 1, 6, 3, 7, 9, 8];

let even1 = (el) => {
    return el % 2 == 0;
};

let evenNumbers = num1.filter(even1);

console.log(evenNumbers); // Output: [2, 4, 6, 8]
//every
let newArr2=[1,2,3,4,5];
let even2=newArr2.every((el)=>{
    return el %2 ==0;
});
console.log(even2);
let newArr3=[2,4];
let even3=newArr3.every((el)=>{
    return el %2 ==0;
});
console.log(even3);
//some
arrNewsum=[1,2,3,4,5];
let some1=arrNewsum.some((el)=>(el%2==0));

