// function abc(x,y){
//     console.log(x)
//     console.log(y)
// }
// abc()
// abc(10)
// abc(10,20)

// function functionwithreturn(a,b){
//     console.log("hello")
//     return a+b
// }


// console.log(functionwithreturn);
// console.log(functionwithreturn(10,20));


// function add(a,b){
//     return a+b
// }

// console.log(add)
// console.log(add(10,20))

// function mul(a,b){
//     return a*b
// }

// console.log(mul)
// console.log(mul(10,20))

// function div(a,b){
//     return a/b
// }

// console.log(div)
// console.log(div(10,20))

// function add(a,b){
//     return a+b
// }

// let addnum=add
// let addvalue=add(10,20)

// console.log(addnum)
// console.log(addvalue)

// function mul(a,b){
//     return a*b
// }
// let multi=mul
// let multires=mul(10,2)
// console.log(multi)
// console.log(multires)


// function add(a,b){
//     return a+b
// }
// function sub(a,b){
//     return a-b
// }
// function mul(a,b){
//    return a*b
// }
// function div(a,b){
//     return a/b
// }

// function calculator(sum,diff,prod,divi){
//     console.log(sum(10,5));
//     console.log(diff(10,5));
//     console.log(prod(10,5));
//     console.log(divi(10,5));
// }
// calculator(add,sub,mul,div)

// calculator(function(){console.log("i am fron argument")},
// ()=>{console.log("I am from second argument"); })

//nested function
// function outer(){
//     console.log("I am from outer function")
//    let a=10;
//     function inner(){
//         console.log("I am from inner function")
//         console.log(a)
//         let b=50
//     }
//     inner()
//    // console.log(b)  //variable declared in outer function we can acess in inner function ,inner function declared variable is not accesible in outer function
// }

// outer()
  
// let tvkalliance="DMK"
// function outer(){
//     let a=10
//     let tvkalliance="congress"
    
   
//     function inner(){
//         let tvkalliance="ADMK"
//         let b=50
//         console.log(a)
        
//     }
//     inner()
//    // console.log(b) 
//     }
// outer()

// function outer(){
//     let a=100
//     let b=200
//     let c=300
//     function inner(){
//         a++
//         let d=100
//         console.log(a,b)
//     }
//     inner()
//     return inner
// }
// let result=outer()
// console.log(result)

//generator function 
function* gen(){
    console.log("Hii")
    yield
    console.log("Hello")
    yield
    console.log("Bye")

}

let genobj=gen()
console.log(genobj.next())
genobj.next()
