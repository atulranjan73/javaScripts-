function reorganizeString(s) {
    const charCount = {};
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    const sortedChars = Object.keys(charCount).sort((a, b) => charCount[b] - charCount[a]);

    if (charCount[sortedChars[0]] > Math.floor((s.length + 1) / 2)) {
        return "";
    }

    let result = new Array(s.length);
    let index = 0;
    for (let i = 0; i < sortedChars.length; i++) {
        const char = sortedChars[i];
        let count = charCount[char];

        while (count > 0 && index < s.length) {
            result[index] = char;
            index += 2;
            count--;
        }

        index = index >= s.length ? 1 : index;
    }

    return result.join("");
}
console.log(reorganizeString("aab"));  
