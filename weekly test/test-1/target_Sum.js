function Targetsum(arr, target) {
    let i = 0;
    let j = arr.length - 1;

    // Sorting the array in ascending order
    arr.sort((a, b) => a - b);

    while (i < j) {
        let sum = arr[i] + arr[j];
        if (sum === target) {
            console.log(arr[i], arr[j]); // Print the pair that sums up to the target
            i++; // Move i to the right to find the next pair
            j--; // Move j to the left to find the next pair
        } else if (sum < target) {
            i++; // If the sum is smaller than the target, move i to the right to increase the sum
        } else {
            j--; // If the sum is greater than the target, move j to the left to decrease the sum
        }
    }
}

// Example usage:
Targetsum([1,2 ,3 ,4 ,5 ,6 ,7,8], 9);
