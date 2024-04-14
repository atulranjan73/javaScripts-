function decodeString(s) {
   const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ']') {
            let decodedString = '';
            while (stack[stack.length - 1] !== '[') {
                decodedString = stack.pop() + decodedString;
            }
            stack.pop(); // Pop '['
            let count = '';
            while (!isNaN(stack[stack.length - 1])) {
                count = stack.pop() + count;
            }
            count = parseInt(count);
            let repeatedString = '';
            for (let j = 0; j < count; j++) {
                repeatedString += decodedString;
            }
            stack.push(repeatedString);
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('');
}

// Test cases
console.log(decodeString("3[a]2[bc]")); // Output: "aaabcbc"
console.log(decodeString("3[a2[c]]")); // Output: "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // Output: "abcabccdcdcdef"
