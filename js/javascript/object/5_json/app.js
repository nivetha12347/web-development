let emp={
    ename:"miller",
    eid:101,
    ismarried:"false"
}
 console.log(emp);
  console.log(typeof emp);


  //json-javascript object notation is a light weight data-interchange Formatted

//   that is easy for humans to read and write,and easy for machine to parse and generate 

//   Advantages of JSON:
//   //human readable:
//   json structure is easy for develpers 


 



//1.JSON.stringfy()

//this method is used to convert any javascript object into json string
//typeof json is string

let jsondata=JSON.stringify(emp)
 console.log(jsondata);
 console.log(typeof jsondata);

 let arr=[1,2,3,4] 
 console.log(arr);
  console.log(typeof arr);

  let jsonarr=JSON.stringify(arr);
   console.log(jsonarr);
    console.log(typeof jsonarr);

    //JSON.parse()
    //this method is used to convert any json string data into javascript object

    let emp2=JSON.parse(jsondata)
     console.log(emp2);
      console.log(typeof emp2);

      let arr2=JSON.parse(jsonarr)
       console.log(arr2);
      console.log(typeof arr2);


    let a="nive"
    let b=10
    console.log(typeof typeof a);  //string
        console.log(typeof typeof b);//string


    

      







