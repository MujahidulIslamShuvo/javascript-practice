let arr=[10,50,100,300];
let result=arr.every((el)=>el%10==0);
console.log(result);
//creat a function to find the min number in an array
let arry=[1,3,4,5,6,7,3,5,4];
let getMin=function(arry){
    let minVal=arry.reduce((min,el)=>{
        if(min<el){
            return min;
        }else{
            return el;
        }
    });
    return minVal;
};
console.log(getMin(arry)); // Output: 1
//Defult parameater

