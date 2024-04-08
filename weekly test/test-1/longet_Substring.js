function longestSubstringWithoutRepeatingCharacters(str) {
    let maxLength = 0;
    let start = 0;
    const charMap = {};

    for (let end = 0; end < str.length; end++) {
        const currentChar = str[end];
        if (charMap[currentChar] !== undefined && charMap[currentChar] >= start) {
            start = charMap[currentChar] + 1;
        }
        charMap[currentChar] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage:
console.log(longestSubstringWithoutRepeatingChar`acters("abcabcbb")); // Output: 3
console.log(longestSubstringWithoutRepeatingCharacters("bbbbb")); // Output: 1
console.log(longestSubstringWithoutRepeatingCharacters("pwwkew")); // Output: 3
