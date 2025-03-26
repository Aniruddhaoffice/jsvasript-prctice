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


// function islogin(username){
//     if(!undefined){
//         console.log("please enter a username ");
        
//     }
//     return `${username} just logged in `
// }
// console.log(islogin());

function calculatecartprice(...num){
    return num

}
// console.log(calculatecartprice(2,34,34,32,45,54,34));

//output
// [
//     2, 34, 34, 32,
//    45, 54, 34
//  ]


//object handel method 


const user = {
    username : "Aniruddha",
    Price : 200
}

function handelobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.Price}`);
    
}

// handelobject(user)

//another way to call 

// handelobject({
//     username:"sam",
//     Price: 399
// })


const myNewArray = [200, 300, 400, 600]

function getarrvalue(getvalue){
    return getvalue[3]
}

console.log(getarrvalue(myNewArray));
