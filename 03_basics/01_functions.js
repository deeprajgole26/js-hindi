
function syMyName(){
    // console.log("D");
    // console.log("e");
    // console.log("e");
    // console.log("p");
}

// syMyName()

// function addTwoNumbers(num1 ,num2){

//     console.log(num1 + num2)
// }

function addTwoNumbers(num1 ,num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);
 
function loginUserMessage(username = "motiii"){
    if(!username){
    console.log("Please enter a username");
    return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Chhotu"));
// console.log(loginUserMessage("Deep"));

function calculateCartPrice(val1, val2, ...num1){
    return num1 // val1=200, val2=400
}
console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Deepraj",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function retrunSecondValue(getArray){
    return getArray[1]
}
// console.log(retrunSecondValue(myNewArray));
console.log(retrunSecondValue([200, 400, 500, 1000]));