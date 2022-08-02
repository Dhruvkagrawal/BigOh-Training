let rows = 3;
let str = ""

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < i; j++) {
        str += " "
    }
    for (let k = i; k <= rows - 1; k++) {
        str += "* "
    }
    str += "\n"
}

for (let i = rows - 1; i >= 1; i--) {
    for (let j = 1; j < i; j++) {
        str += " "
    }
    for (let k = i; k <= rows; k++) {
        str += "* "
    }
    str += "\n"
}

console.log(str);