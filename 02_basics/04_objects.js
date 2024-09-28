const tinderUser_singleton = new Object();  // singleton object
const tinderUser_NonSingleton = {};  // Non singleton object

//console.log(tinderUser_singleton);
//console.log(tinderUser_NonSingleton);

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"chirag",
            lastname:"parmar"
        }
    }
}

//console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {1:"a", 2:"b"}

//Notes - Object.assign() static method copies enumerable from one or more source objects to a target object it return modify target object.

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign(obj1,obj2)
const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));




// Notes - Object destructures.

const Course  = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

//const {courseInstructor} = Course;
const {courseInstructor:Instructor} = Course;
console.log(Instructor)

