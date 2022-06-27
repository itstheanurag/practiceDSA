// write a function to check if the input is an integer

// method 1
function isInteger(x) {
    return parseInt(x, 10) === x;
}
console.log(isInteger("ok"))



// method 2
function isInteger(x) {
    if (typeof x === 'number' && x % 1 === 0){
        return true
    }
    else return false

}
console.log(isInteger("okk"))


// method 3


