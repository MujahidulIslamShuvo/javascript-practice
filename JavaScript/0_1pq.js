// const sqaure=(n)=>n*n;
// console.log(sqaure(4));
let id=setInterval(()=>{
        console.log("Hello world");
},2000);
setTimeout(()=>{
    clearInterval(id);
    console.log("Cleard Interval");
},10000);