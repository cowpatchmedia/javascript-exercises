const sumAll = function(begin, end) {
    let sum = 0;
    
    if (
        typeof begin !== "number" ||
        typeof end !== "number" ||

        begin < 0 ||
        end < 0 ||

        !Number.isInteger(begin) ||
        !Number.isInteger(end)

    ){
        return "ERROR";
    };

    if (begin>end) {
        let temp = begin;
        begin = end;
        end = temp; 
    }

    for (let i = begin; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
