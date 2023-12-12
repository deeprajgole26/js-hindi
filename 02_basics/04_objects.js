// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Motuuu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Deepraj",
            lastname: "Gole"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) 

const obj3 = {...obj1, ...obj2, ...obj4} //spread 
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "dg@gmail.com"
    },
    {
        id: 2,
        email: "ss@gmail.com"
    },
    {
        id: 3,
        email: "sd@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Deepraj"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// {
//     "name" "deepraj",
//     "coursename": "js in hindi",
//     price: "free"
// }

[
    {},
    {},
    {}
]