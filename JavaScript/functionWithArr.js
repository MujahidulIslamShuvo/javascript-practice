function printName(name){
    console.log(name);
}
printName("shuvo");//prameater

function printInfo(name,age){
    console.log(`name ${name} age is ${age}`);
}
printInfo("shuvo",24);//prameater

function printSum(a,b){
    
    return a+b;
}
let s= printSum(5,6);
console.log(s);

function threeNumberavg(a,b,c){
    console.log((a+b+c)/3);
}
threeNumberavg(2,4,6);

function multiTable(n){
    for(let i=n;i<=n*10;i+=n){
        console.log(i)
    }
}

function getSum(n) {
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}
console.log(getSum(5));

let str=["hi","hello","bye"];
function concat(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result+=str[i];
    }
    return result;
}
console.log(concat(str));