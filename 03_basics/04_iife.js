// Immediately Invoked Function Expression (IIFE)
// global scope ke pollution se problem hoti he kai baar to uss 
//global scope ke variables he uske pollution ko hatane ke liye IIFE ka use kiya he   

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


// (function definition) (function execution) ()()

( (name) => {
    // unname IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('Deepraj')