
let myDate = new Date()

// console.log(myDate);

// console.log(myDate.toDateString())

// console.log(myDate.toLocaleString())

// console.log(typeof myDate)

// let createDate = new Date(2023,1,20,5,3)

let createDate = new Date('12,20,2023')

// console.log(createDate.toDateString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp);

// console.log(createDate.getTime())

// console.log(Math.floor(Date.now()/1000))

// console.log(Math.round(Date.now()/1000))


let NewDate = new Date()

console.log(NewDate.getMonth()+1);
console.log(NewDate.getDay());


console.log(NewDate.toLocaleString('default',{
    weekday:'short'
}))

