const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const testArray2 = [12, 13, 14]
testArray.push(11)

testArray.forEach(element => {
    console.log(element)
});

const arrays = testArray.concat(testArray2);
const lastItem = testArray.pop();
console.log("array length: " + testArray.length)
console.log("Last array item: " + lastItem)

arrays.forEach(element => {
    console.log(element)
});

