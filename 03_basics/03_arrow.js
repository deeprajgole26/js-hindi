const user = {
    username: "deepraj",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}
// browser ke andr jo global object he vo windows object he
// user.welcomeMessage()
// user.username = "DeepS"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username= "Hariom"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "gole"
//     console.log(this.username);
// }

const chai = () => {
    let username = "gole"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 //implicit return
// const addTwo = (num1, num2) => (num1 + num2) // curly braces ke andr wrap kr rahe hoto return keyword likhna padega or kabhi brackets ke andr likh rahe ho to nahi likhna padega.
// when we use return keyword in curly braces it is called as explicit return.
const addTwo = (num1, num2) =>({username: "deep gole"})

console.log(addTwo(3, 4));

// const myArray = [2,5,3,4,6]
// myArray.forEach()