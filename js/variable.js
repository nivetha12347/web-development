// var a=10
// var b="whistle adi"
// var c=false
// console.log(a,b,c)

// let d=100
// let e="virat the king"
// let f=true
// console.log(d,e,f)

// const g=200
// const h="web tech"
// const i=false
// console.log(g,h,i)


// var a=10  //declaration
// console.log(a)

// var a=20 //redeclaration
// console.log(a)

// let b=5;
// console.log(b)

// let b=10;
// console.log(b)

// const c=25
// console.log(c)

// let c=30
// console.log(c)/          // in let const redeclaration not alllowed

// let a=10;
// a=5
// console.log(a)     // reinitialization is possible for let 

// var b=3;
// b=7
// console.log(b)     //reinitialization is possible for var

// const c=8
// c=6
// console.log(c)      // reinitialization is not possible for const 
  

// let a=5;
// console.log(a)

// var b;   //for let and var initialization is not compulsary

// const c;   // for const initialization is compulsary so it show error

a=10
console.log("global scope")
console.log(a)          //global scope variable is access anywhere 
var d=5  //var is act as gobal scope if we put var in function it act as function scope but if 
        // we put in block it act as global scope so we dont go with the var keyword

console.log(d)


{
console.log("block scope")
console.log(a)
b=100;
console.log(b)    // without var,let ,const simply the variable name we can access the block variable in block , global,function (it act like a global scope)
var d=10;  // here var is act as global scope
console.log(d)
}

console.log(b)
console.log(d)

function abc(){
console.log("function scope")
console.log(a)
console.log(b)
console.log(d)
c=20
// var d=3;  //here var act as function scope
console.log(d)
console.log(c)  //we can access this in anywhere (it act like global )
}
abc()

