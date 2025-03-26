// console.log("hello function");


function subNumbers(a , b){

    console.log(a + b);
    }


function addNumbers (a , b){
 
    return a - b 
 
}

// const result = addNumbers(3, 35)
// console.log(result);

// console.log(addNumbers(3,10))



// console.log(typeof result); // return number 
// console.log(typeof subNumbers); // return function 

// function islogin(username){
//     return `${username} just logged in `
// }

// console.log(islogin("Aniruddha"));

// function islogin(username){
//     if(username === undefined){
//         console.log("please enter a username ");
        
//     }
//     return `${username} just logged in `
// }
// console.log(islogin()); //output -> please enter a username 
// console.log(islogin("Aniruddha"));


function islogin(username){
    if(!undefined){
        console.log("please enter a username ");
        
    }
    return `${username} just logged in `
}
console.log(islogin());