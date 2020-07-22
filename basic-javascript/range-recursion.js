//function to use recursion to find range of numbers from start to end (inclusive).

function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
    } else {
        const countArray = rangeOfNumbers(startNum + 1, endNum);
        countArray.unshift(startNum);
        return countArray;
    }
};

console.log(rangeOfNumbers(1, 10));