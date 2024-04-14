var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        }
        
        // Check if the left half is sorted
        if (nums[left] <= nums[mid]) {
            // Check if the target is within the sorted left half
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else { // Right half is sorted
            // Check if the target is within the sorted right half
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return -1; // Target not found
};

// Example usage:
const nums1 = [4,5,6,7,0,1,2];
const target1 = 0;
console.log(search(nums1, target1)); // Output: 4

const nums2 = [4,5,6,7,0,1,2];
const target2 = 3;
console.log(search(nums2, target2)); // Output: -1

const nums3 = [1];
const target3 = 0;
console.log(search(nums3, target3)); // Output: -1
