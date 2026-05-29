let wish=()=>{
    console.log("happy birthday ❤️")
}
let changecolor=()=>{
 let div=document.querySelector("div")
 div.style.backgroundColor="red";
}
let add=()=>{
    alert("i am additional function");
}


//create increase function
let num=0
let increase =()=>{
    let h2=document.querySelector("h2")
   num=num+1;
    h2.innerText=num;
}


//onmouseover
let cbc=()=>{
    console.log("hi");
    let box2=document.querySelector(".box2")
    box2.style.backgroundColor="pink";
}

//onmouseout
let cbc2=()=>{
    let box2=document.querySelector(".box2")
    box2.style.backgroundColor="blue";
}


//onmousemove 
let box3=document.querySelector(".box3");
let c=0;
let increaseNumber=()=>{
   c=c+1;
   box3.innerHTML=`<h1>${c}</h1>`;
}


let copytext=()=>{
    let card1=document.querySelector(".card1");
    let card1content=card1.innerHTML;
    let card2=document.querySelector(".card2");
    card2.innerHTML=card1content;
    card1.innerText=" ";
    
}