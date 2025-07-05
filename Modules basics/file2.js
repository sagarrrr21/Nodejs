const fs = require("fs")

console.log("blocking...\n\n")

console.log("1")
const result = fs.readFileSync("contacts.txt", "utf-8")
console.log(result)

console.log("2")
console.log("3")


console.log("Non-blocking...\n")

console.log("1")

fs.readFile("contacts.txt", "utf-8", (err, res) => {
    console.log(res);
})

console.log("2")
console.log("3")
