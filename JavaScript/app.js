const favMovie= "avatar";
let guess=prompt("Guess my movie:");
while(favMovie!=guess){
    if(guess=="quit"){
        console.log("you quit")
        break;
    }
    let Guess=prompt("wrong guess pleace try again");
}
if(guess==favMovie){
    console.log("congrats");
}else{
    console.log("quit")
}