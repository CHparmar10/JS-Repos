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

const obj1 = {}