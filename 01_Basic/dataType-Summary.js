
/**********************Primitive data type *************************/

//number, Boolean,  string, null, undefined, symbol, BigInt

/*****************Non-Primitive/Refrence data type*************************/

//Array, Object, Functions


const Arr = ["pawan","lakshay","nitin"]

const detail = {
    
    name:'nitin',
    age:26,
    designation:'Software Developer'
    
    
}


const feature = function system()
{
    console.log('kese ho bhai log')
}


let name = "nitin sain"

let AnotherName = name

AnotherName = "APJ Abdul Kalam"

console.log(AnotherName)
console.log(name)

let User = {
    email:"ramesh@gmail.com",
    upi:"ramesh@ybl"
}

let User1 = User

User.email="mahi@gmail.com"

console.log(User.email)
console.log(User1.email)


