console.log("global scope")

{
    console.log("This is block scope")
}


function abc(){
    console.log("This is local or function scope");
}
abc()
console.log("global scope")