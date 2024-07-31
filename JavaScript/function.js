 function hello(){
     console.log("hello");
 }

function print1To5(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}
//print1To5();

function print1To5() {
    let output = '';
    for (let i = 1; i <= 5; i++) {
        output += i + ' ';
    }
    console.log(output);
}

// Call the function to execute
//print1To5();
function rollDice(){
    let random= Math.floor(Math.random()*6)+1;
    console.log(random);
}
rollDice();