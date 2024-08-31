// A function that takes another function (callback) as an argument
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
  }
  
  // A callback function
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  // Passing 'sayGoodbye' as a callback to 'greet'
  greet("Alice", sayGoodbye);
  
  // Output:
  // Hello, Alice!
  // Goodbye!
  function sum(a,b,cb){
    let result=a+b;
    cb(result);
  }
  sum(5,1,function(result){
    console.log(result);
  })
  