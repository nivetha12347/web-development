//generator function 
// function* gen(){
//     console.log("Hii")
//     yield
//     console.log("Hello")
//     yield
//     console.log("Bye")

// }

// let genobj=gen()

// genobj.next()
// genobj.next()
// genobj.next()

// function* color(){
//     console.log("Yellow")
//     yield 50
//     console.log("Blue")
//     yield "samson man of the match"
//     console.log("Green")
   
// }

// let colors=color()

// console.log(colors.next())
// console.log(colors.next())
// console.log(colors.next())

//function constructor
// let a=20;
// function abc(){
//     console.log(this)
// }
// window.abc()
// let obj1={
//     product:"laptop",
//     price:2500,
//     sale:function(){
//         console.log(`${this.product} price is down to ${this.price}`)
//     }
// }
// obj1.sale()


// let obj2={
//     name:"vijay",
//     previous:"Actor",
//     Now:"CM",
//     action:function(){
//           console.log(`${this.name} is before ${this.previous} and now ${this.Now}`)
//     }
// }
// obj2.action()

//username,useemail,userage

// function sale(){
//     console.log(`product name is ${this.product} and price drop to ${this.price}`)
    
// }

// let obj1={
//     product:"laptop",
//     price:250000
// }
// let obj2={
//     product:"mobile",
//     price:25000
// }
// sale()
// sale.call(obj1)
// sale.call(obj2)

// function user(){
//     console.log(`User name is ${this.name} ,email is ${this.email} ,age is ${this.age}`)
// }
// let obj1={
//     name:"Nivetha",
//     email:"nive@gmail.com",
//     age:23
// }
// let obj2={
//     name:"Krish",
//     email:"krish@gmail.com",
//     age:23
// }
// let obj3={
//     name:"Nila",
//     email:"nila@gmail.com",
//     age:22
// }
// let obj4={
//     name:"kanna",
//     email:"kanna@gmail.com",
//     age:32
// }
// let obj5={
//     name:"kavya",
//     email:"kavya@gmail.com",
//     age:24
// }
// user.call(obj1)
// user.call(obj2)
// user.call(obj3)
// user.call(obj4)
// user.call(obj5)

// let obj={
//     name:"vignesh"
// }
// obj.name="santanu sir"
// obj.email="vignesh@gmail.com"
// console.log(obj)

let obj={

}
let obj2={
    
}
function abc(a,b){
    this.name=a
    this.age=b
}
abc.call(obj,"msd",4)
abc.call(obj2,"virat",38)
console.log(obj,obj2);