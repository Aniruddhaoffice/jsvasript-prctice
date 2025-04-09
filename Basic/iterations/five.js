const coding = ["js","rubi","java","python","cpp"]

// coding.forEach( function (item) {
//     console.log(item);
    
// } )

// coding.forEach((item)=>{
//     console.log(item);
    
// } )

function printMe(item){
    console.log(item);
    
}
// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

// output :
// js 0 [ 'js', 'rubi', 'java', 'python', 'cpp' ]
// rubi 1 [ 'js', 'rubi', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'rubi', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'rubi', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'rubi', 'java', 'python', 'cpp' ]



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageFileName , item.languageName);

} )