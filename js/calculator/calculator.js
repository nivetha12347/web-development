let input=document.querySelector("input");
console.log(input);


let getcharacter=(ch)=>{
    
    if(input.value!=0)
        input.value+=ch;
    else
        input.value=ch;
}


// clear the input field
let clearInput=()=>{
 input.value=""
}

// calculation

let calculate=()=>{
    let data=input.value;
    console.log(data);
    input.value=eval(data);
}


//remove last character

let removeLast=()=>{
    let data=input.value;
    //let updatedata=data.slice(0,-1);
    //input.value=updatedata;
    input.value=data.slice(0,-1);
}