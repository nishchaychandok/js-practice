// Primitive 

// 7 types : (Call BY VAlue = Copy File )  String, Numbers, Boolean, null, undefined, Symbol, BigInt




//Reference type ( Non Primitive )

// Array, Objects, Functions, 

const heros = ["Flying jatt", " MARIO", "Shaktimaan"]

let myObj= {

    name :"NISHCHAY",

    age : 21,


}

const myfunc = function(){
    console.log("HELLO WORLD");
    
}


//console.log(myObj);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack ( Primitive ) , Heap ( Non Primitive )


let myName = "Nish"

let anothername = myName

anothername = "Chay"


//console.log(anothername);
//console.log(myName);


let user1 = {
    email : "user@gmail",
    upi: "user@iipl",
}


let user2 = user1

user2.email = "Nishcom@"

console.log(user1);
console.log(user2);



