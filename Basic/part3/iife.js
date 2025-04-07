//immediately invoked function expressions (IIFE)

(function chai(){

    console.log(`DB CONNECTION`);
    
})();
 // [ ; will be must for next same function]


(function chaiaur(){

    console.log(`DB CONNECTION`);
    
})();

((name)=>{

    console.log(`DB CONNECTION to ${name}`);
    
})('Aniruddha');