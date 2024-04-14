var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        const area = h * w;
        
        maxArea = Math.max(maxArea, area);
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
};

// Example usage:
const height1 = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height1)); // Output: 49

const height2 = [1,1];
console.log(maxArea(height2)); // Output: 1
