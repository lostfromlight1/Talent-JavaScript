// console.log("Typeof undefined: ", typeof undefined)
// console.log("Typeof null: ", typeof null)
// console.log("Typeof true:", typeof true)
// console.log("Typeof false:", typeof false)
// console.log("Typeof 12335", typeof 121341)
// console.log("Typeof 121.22", typeof 121.22)
// console.log("Typeof \"double quotes\"", typeof "Double quotes")
// console.log("Typeof 'single quotes'", typeof 'single quotes')
// console.log("Typeof {}", typeof {})
// console.log("Typeof console.log", typeof console.log)



// console.log("Hello world")

// //variables
// var legacy = "hello" //hoisted above, can reassign and redeclare
// let mutable = "mutable" //can reassign but cannot redeclare cannot go outsite the scope
// const unmutable = "unmutable" //cannot reassign but cannot redeclare cannot go outsite the scope

// //Arithemtic Operators
// console.log(1 + 1)
// console.log(1 - 1)
// console.log(1 * 1)
// console.log(1 / 1)
// console.log(2 % 5)
// console.log(+"5") // number

// let num = 5
// console.log(++num)
// console.log(num++)

// //string concat
// console.log("Hello " + "world")
// const name = "Kyaw"
// console.log(`Hello ${name}`)

// console.log(!true)
// console.log(!false)

// if (true) {
//     console.log("This is log")
// } else {
//     console.log("This is not log")
// }

// let age = prompt("what is yoru age")


// if (age < 5) {
//     console.log("baby")
// } else if (age < 13) {
//     console.log("Child")
// } else if (age <= 18) {
//     console.log("Teen")
// } else {
//     console.log("Adult")
// }

// let i = 0;

// while (i < 5) {
//     console.log(i)
//     i++
// }

// let name = "Thanlwin"

// for (let i = 0; i < name.length; i++) {
//     console.log(name[i])
// }


let password = prompt("Enter your password");
// let isValid = true;

// if (password.length < 8) {
//     isValid = false
//     alert("Password must be below 8")
// }


// let hasUpper = false;
// let hasLower = false;
// let hasDigit = false;
// let hasSpecial = false;


// for (let i = 0; i < password.length; i++) {
//     let ch = password[i];
//     if (ch >= 'A' && ch <= 'Z') hasUpper = true;
//     else if (ch >= 'a' && ch <= 'z') hasLower = true;
//     else if (ch >= '0' && ch <= '9') hasDigit = true;
//     else if (ch === '!' || ch === '@' || ch === '#' || ch === '$') hasSpecial = true;
// }

// if (!hasUpper) alert("Password must have at least one uppercase letter");
// if (!hasLower) alert("Password must have at least one lowercase letter");
// if (!hasDigit) alert("Password must have at least one number");
// if (!hasSpecial) alert("Password must have at least one special character");


// if (isValid && hasUpper && hasLower && hasDigit && hasSpecial) {
//     alert("Password is valid");
// }
let minLength = /.{8,}/;
let uppercase = /[A-Z]/;
let lowercase = /[a-z]/;
let digit = /[0-9]/;
let specialChar = /[!@#$%]/;


if (!minLength.test(password)) {
    alert("Password must be at least 8");
} else if (!uppercase.test(password)) {
    alert("Min upper 1");
} else if (!lowercase.test(password)) {
    alert("Min lower 1");
} else if (!digit.test(password)) {
    alert("Min digit 1");
} else if (!specialChar.test(password)) {
    alert("Special char 1");
} else {
    alert("Password is valid ");
}