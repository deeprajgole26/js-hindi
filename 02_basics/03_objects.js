
// singleton :- if any of constructor use it makes singleton object.
// jb bhi hm literal ki trh declare karte he to singleton nahi banta he
//Object.create
// object literals 

// singleton :- if any of constructor use it makes singleton object.
// jb bhi hm literal ki trh declare karte he to singleton nahi banta he
//Object.create

const JsUser = {
    name:"Deepraj",
    age: 18,
    location: "Indore",
    email: "deeprajgole@gmail.com",
    isLoggedIn: false,
    isLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.age);


// object literals 

const mySym = Symbol("key1")

const JsUser = {
    name:"Deepraj",
    "full name": "deepraj gole",
    [mySym]: "mykey1",
    age: 18,
    location: "Indore",
    email: "deeprajgole@gmail.com",
    isLoggedIn: false,
    isLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "deeprajgole@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "deeprajgole@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // string interpolation by using backstick(``)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
