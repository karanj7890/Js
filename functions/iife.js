// Immediately Invoked Function Expressions(IIFE)

(function chai(){
    // named iife
    console.log(`DB connected`);
})();


//global scope ki wajah se pollution hoti hai toh usko hatane ke liye iife ka use kiya

(  (name) => {
    console.log(`Connected ${name}`);
})("Karan")