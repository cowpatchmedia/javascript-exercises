const reverseString = function(str) {
    return str.split("").reverse().join("");
};

console.log(reverseString('hello there'));
console.log(reverseString('123! abc! Hello, Odinite.'));

// Do not edit below this line
module.exports = reverseString;
