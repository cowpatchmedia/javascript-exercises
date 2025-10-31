const palindromes = function (word) {
    const clean = word.toLowerCase().replace (/[^a-z0-9]/g,"");
    const reverse = clean.split("").reverse().join("");
    
    return clean === reverse;
}

// Do not edit below this line
module.exports = palindromes;
