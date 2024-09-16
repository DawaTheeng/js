// Singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Dawa",
    "full name": "Dawa Tamang",
    [mySym]: "mykey1",
    age: 21,
    location: "Kathmandu",
    email: "Dawa@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)   // . => value declaration 
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "dawa@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "dawa@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());