//function Scope
let sum=54;//global scope

function getsum(x,y){
    let sum=x+y;//function scope
}

for(let i=1;i<=5;i++){
    console.log(i);//block scope
}