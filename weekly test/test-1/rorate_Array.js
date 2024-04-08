function rotateArrayRight(arr, positions) {
    if (arr.length === 0) {
        return arr;
    }
    const n = arr.length;
    const effectivePositions = positions % n;
    
    return arr.slice(n - effectivePositions).concat(arr.slice(0, n - effectivePositions));
}
const array = [1, 2, 3, 4, 5];
const rotatedArray = rotateArrayRight(array, 2);
console.log(rotatedArray); // Output: [4, 5, 1, 2, 3]
