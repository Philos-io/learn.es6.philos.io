// // From hack Mozilla
// function User(info) {
//     this.firstname = info.name;
//     this.lastname = info.
//     Circle.circlesMade++;
// }
//
// User.run = function run() {
//     console.log('running');
// }
//
// Object.defineProperty(User, "firstname", {
//     get: function() {
//         return !this._firstname ? 0 : this._firstname;
//     },
//
//     set: function(val) {
//         this._firstname = val;
//     }
// });
//
// User.prototype = {
//     sayName: function sayName() {
//         console.log(this.firstname);
//     }
// };
//
// Object.defineProperty(User, "age", {
//     get: function() {
//         return this._age;
//     },
//
//     set: function(age) {
//         if (!Number.isInteger(age))
//             throw new Error("User's age must be an integer.");
//         this._age = age;
//     }
// });
//
//
// var user = new User();
//
// class User{
//     constructor(){
//
//     },
//
//     static run(){
//         console.log('running');
//     }
//
//     get firstname(){
//         return !this._firstname ? 0 : this._firstname;
//     }
//
//     set firstname(val){
//         this._firstname = val;
//     }
//
//     sayName(){
//         console.log(this.firstname);
//     }
// }
