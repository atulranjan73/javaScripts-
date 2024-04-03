var isAnagram = function(s, t) {
    // Check if the lengths of both strings are different
    if (s.length !== t.length) {
        return false;
    }
    
    // Sort both strings and compare them
    return s.split('').sort().join('') === t.split('').sort().join('');
};

let s = "ada"
let t ="ada"

if (isAnagram(s, t)) {
    console.log("True");
} else {
    console.log("False");
}
