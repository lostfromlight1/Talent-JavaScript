function hello(name = "World") {
    let prefix = "Hello"
    return `${prefix}, ${name}`
}

function variadicArgument(...strs) {
    for (const str of strs) {
        console.log(str)
    }
}

console.log(hello())
variadicArgument("Hello", "World!", "This")

const greet = "Hello ".concat("World", "A", "B", "C")

function concat(self, ...strs) {
    let result = self

    for (const str of strs) {
        result += str
    }
}


function substring(self, indexStart, indexEnd = self.length) {
    let result = ""

    for (let i = indexStart; i < indexEnd; i++) {
        result += self[i]
    }
}

function trimStart(str) {
    let result = ""
    let charfound = false

    for (const char of str) {
        if (!charfound && char === " ") {
            continue
        }

        charfound = true
        result += char
    } ``

    return result
}
const greeting = "   Hello world!   ";

console.log(greeting)
console.log(trimStart(greeting))

function trimEnd(str) {
    let result = ""
    let charfound = false

    for (let i = str.length - 1; i >= 0; i--) {
        const char = str[i]

        if (!charfound && char === " ") {
            continue
        }

        charfound = true
        result = char + result
    }

    return result
}


console.log(greeting)
console.log(trimEnd(greeting))

function includes(sentense, word) {
    for (let i = 0; i <= sentense.length - word.length; i++) {
        let found = true;

        for (let j = 0; j < word.length; j++) {
            if (sentense[i + j] !== word[j]) {
                found = false;
                break;
            }
        }

        if (found) {
            return true;
        }
    }
    return false
}
console.log(includes("hello world", "world"));
console.log(includes("hello world", "wor"));
console.log(includes("hello world", "abc"));
// console.log("Hello".concat(" ", "World"))
// console.log(greet)
// console.log("Mozilla".substring(1, 3))

function includes() {
    console.log()
}

const anonymous = function () {
    console.log("anonymous")
}

const arrow = () => {
    console.log("arrow")
}

const arrayconcat = (arr1, arr2) => {
    let result = []
    for (let i = 0; i <= arr1; i++) {
        for (let i = 0; i <= arr2; i++) {
            result.push(i)
        }
    }


}


const every = (arr, fn) => {
    for (const el of arr) {
        if (!fn(el)) {
            return false
        }
    }

    return true
}

const some = (arr, fn) => {
    for (const el of arr) {
        if (fn(el)) {
            return true
        }
    }

    return false
}

console.log([1, 2, 3].concat([4, 5, 6]))
console.log(arrayconcat([1, 2, 3], [4, 5, 6]))

console.log([1, 30, 39, 29, 10, 12].every((value) => value < 40))

console.log(every([1, 30, 29, 39, 29, 10, 13], (value) => value < 40))