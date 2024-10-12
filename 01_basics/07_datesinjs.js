// DATE

let myDate = new Date()
/*console.log(myDate.toString());
console.log(myDate.toDateString()); //this one is good
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toJSON());*/


//let myCreatedDate = new Date(2023,0,27,5,3) // Month start from 0 in javascript 0 month = January.... 

//let myCreatedDate = new Date("2023-01-14")// if you do yy-mm-dd format month starts from 1 for eg 01 = January


//let myCreatedDate = new Date("01-14-2024")

//console.log(myCreatedDate.toLocaleString());


let myTimestamp = Date.now()
//console.log(myTimestamp);

//console.log(Date.now()/1000); // To convert time from miliseconds to seconds divide by 1000 , but it will give decimal
//console.log(Math.round(Date.now()/1000));// to remove decimal either round the value or floor.....


let newDate = new Date()
//console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
})

console.log(newDate);



