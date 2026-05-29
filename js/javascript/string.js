// let str1='hello'
// let str2="hey"
// let str3=`how are you`
// console.log(str1)
// console.log(typeof(str1))

 // string is a collection of characters ,that could be single or multiple.
 // string data should be enclosed with ''  /  " "  / ` `


// console.log(str2)
// console.log(typeof(str2))

// console.log(str3)
// console.log(typeof(str3))

//string interpolation / template literals 

//when we want to access any variable inside string the string shoud be enclosed with  ` `(backtick), and the variable 
//should be written inside ${}.
// let a=10;
// let b=20;
// let sum =a+b;
// console.log(`the addition of ${a} and ${b} is ${sum}`)
// console.log(`the subtraction of ${a} and ${b} is ${a-b}`)

// ! length 
// length property is used to know the size of the string

// let str1="hey how are you"
// let str2="hii nive"
// console.log(str1.length) 
// console.log(`the length of str2 is ${str2.length}`) 

// String methods

// 1.toLowerCase()

// this method is used to convert the string into lowercase and it will return one new string .
// original string it will not modify 
// let greet="Good Afternoon"
// let lower=greet.toLowerCase()
// console.log(lower)
// console.log(greet)  

// 2. toUpperCase()

// let greet="Good Afternoon"
// let upper=greet.toUpperCase()
// console.log(upper)
// console.log(greet) 

//3.chartAt()

// this method is used to know at the given index which character is present 
//it will take one parameter (index).
// let msg ="vijay is cm"
// console.log(msg.charAt(10))
// console.log(msg.charAt(3))

//check palindrome

// let str="jack"
// let rev=""
// for(let i=str.length-1;i>=0;i--){
//    rev=rev+str.charAt(i)
// }
// console.log(str)
// console.log(rev)

// if(str==rev)
//     console.log("palindrome")
// else
//     console.log("Not palindrome")

//4.indexOf()
//indexof method is used to know the index of the given character .
//if the given character is present more than one time,then it will give the first occurance
//if the character not present then this method will return -1

// let lang="malayalam"
// console.log(lang.indexOf("k"))


//5.lastindexof()
//lastIndexof() is used to know the last occurance index of the given character 
// if the character not present then this method will return -1

// let lang="malayalam"
// console.log(lang.lastIndexOf("a"))

//string present only one time not duplicate //find single element
let str="madam"
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i)
    if(str.indexOf(ch)==str.lastIndexOf(ch)){
        console.log(ch)
        break
    }
}