//higherorderfunction
// let hello=(a)=>{
//     a()
//     console.log("i am hello function")
    
// }
// hello(()=>{
//     console.log("I am callback function")
// })



//closure
// let outer=()=>
// {
//     let a=10;
//     let inner=()=>{
//         console.log(a++)
//     }
//     return inner
// }
// let res=outer()
// res()
// res()
// res()



//iife(immediately invoked function expression)

(
    function(){
   console.log("i am iife")
}
)();   //semicolon need to put in iife otherwise creating another iife and execute it will give error 
