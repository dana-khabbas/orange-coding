let s1="Hello ";
let s2="World";
console.log(s1.concat(s2));

// ### 2. String Length
// Create a variable with the value `"JavaScript"`.

// Write code to find how many characters are inside the string.
let s3="JavaScript";
console.log(s1.length);



// ### 3. Access First Character
// Given the string `"Programming"`, print only the **first character**.

let s4="Programming";
console.log(s4.charAt(0));

// ### 4. Extract Part of a String
// From the string `"coding is fun"` extract the word `"coding"`.
let s5 = "coding is fun";

console.log(s5.substring(0,6));

// ### 5. Replace Characters
// Given the string `"cat"`, replace the letter `"a"` with `"e"`.
let s6 = "cat";

console.log(s6.replace("a","e"));

// ### 6. Convert to Uppercase
// Convert the string `"javascript"` to uppercase letters.
let s7 = "javascript";
console.log(s7.toUpperCase());

// ### 7. Split a String
// Convert the string `"apple,banana,orange"` into an **array of fruits**.
let s8= "apple,banana,orange";
console.log(s8.split(","));


// ### 8. Join Array into String
// Join the words into one string separated by a space.

let s9=["hello","world"];
console.log(s9.join(" "));

// ### Remove Extra Spaces
// Remove the extra spaces at the beginning and end of the following string:
let s10=" hello world ";
console.log(s10.trim());

// ### 10. Check if a Word Exists
// Check if the word `"world"` exists inside the string `"hello world"`.
let s11= "hello world";
console.log(s11.includes("world"));

// ### 11. Reverse a String
// Reverse the following string:

let s12="hello";
let reverse= s12.split("");
reverse=(reverse.reverse()).toString();
console.log(reverse);

// ### 12. Count Character Occurrences
// Count how many times the letter `"e"` appears in the string `"elephant"`.

let s13="elephant";
let result=s13.match(/e/g);
console.log(result.length);

// ### 13. Palindrome Check
// Check if the string `"racecar"` reads the same forward and backward.
let s14="racecar";
let reverse_s14= s14.split("");
reverse_s14=(reverse_s14.reverse()).join("");
if(reverse_s14==s14){console.log("true");}
else{console.log("false");}

// ### 14. Capitalize Each Word
// Convert the first letter of each word to uppercase.
let s15="hello world";
let s15_arr=s15.split(" ");
let i=0;
for(let x of s15_arr){
   s15_arr[i]= x.charAt(0).toUpperCase() + x.slice(1);
i++;
}
console.log(s15_arr);

// ### 15. Format Number
// Convert the number `1234.5678` so it shows **only two decimal places**.
let s16=1234.5678;
let s16_fixed=s16.toFixed(2);
console.log(s16_fixed);

// ### 16. Extract Numbers from String
// Extract all numbers from the following sentence:
let s17="There are 3 apples and 2 oranges";
let s17_match= s17.match(/\d/g);
console.log(s17_match);

// ### 17. Email Validation
// Check if the following string is a valid email format.
let s18="example@email.com";
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailPattern.test(s18));

// ### 18. Replace Word
// Replace the word `"bad"` with `"good"` in the sentence
let s19="This is a bad word";
console.log(s19.replace("bad","good"));

// ### 19. Remove Duplicate Characters
// Remove duplicate characters from the string

let s20 = "aabbc";
 s20_Set = new Set(s20);

 let s20_string="";
for(let x of s20_Set){
s20_string+=x;
}
console.log(s20_string);

// ### 20. Sort Characters Alphabetically
// Sort the characters in the string `"hello"` alphabetically.
let s21="hello";
let s21_arr=s21.split("");
console.log(s21_arr.sort().join(''));

// ### 21. Check for Anagrams
// Check if the following two words are anagrams (contain the same letters).
let s22="listen";
let s23="silent";
let s22_arr=s22.split("").sort();
s22=s22_arr.join('');
let s23_arr=s23.split("").sort();
s23=s23_arr.join('');
console.log(s23==s22);

// ### 22. Reverse Words in Sentence
// Reverse the **order of words** in the sentence but keep the letters of each word unchanged.
let s24="The quick brown fox";
let s24_arr=s24.split(' ').reverse();
s24=s24_arr.join(' ')
console.log(s24);

// ### 23. Find the Longest Word
// Find the **longest word** in the following sentence.
let s25="Web is fascinating development ";
let s25_arr=s25.split(' ');
let max="";
for(let x of s25_arr){
if(x.length>max.length){
   max=x;
}
}
console.log(max);

// ### 24. Advanced Palindrome///-----------///
// Check if the sentence is a palindrome **ignoring spaces, punctuation, and case**
let s26="A man, a plan, a canal, Panama!";
let s26_arr=s26.match(/[a-z0-9A-Z]/g);
s26_arr_reverse=s26_arr.reverse().join("").toLowerCase();
s26_arr=s26_arr.join("").toLowerCase();
console.log(s26_arr==s26_arr_reverse);

// ### 25. Character Frequency
// Return an object that counts how many times each character appears.
let s35 = "mississippi";
let freq = {};

for (let i = 0; i < s35.length; i++) {
    let c = s35[i];

    if (freq[c]) {freq[c]++;}
    else freq[c] = 1;
}

console.log(freq);

// 26. Replace Vowels with Numbers
let s36 = "Hello World";

if (s36.includes("a") || s36.includes("A")) {
    s36 = s36.replace(/a/gi, "1");
}

if (s36.includes("e") || s36.includes("E")) {
    s36 = s36.replace(/e/gi, "2");
}

if (s36.includes("i") || s36.includes("I")) {
    s36 = s36.replace(/i/gi, "3");
}

if (s36.includes("o") || s36.includes("O")) {
    s36 = s36.replace(/o/gi, "4");
}

if (s36.includes("u") || s36.includes("U")) {
    s36 = s36.replace(/u/gi, "5");
}

console.log(s36);

// ### 27 — startsWith
// Check if the string `"JavaScript is fun"` starts with `"Java"`.
let s37="JavaScript is fun";
console.log(s37.startsWith("Java"));

// ### 28 — endsWith
// Check if the string `"image.png"` ends with `"png"`.
let s38="image.png";
console.log(s38.endsWith("png"));
// ### 29 — repeat
// Repeat the string `"ha"` 3 times.
s39="ha";
console.log(s39.padEnd(s39.length*3,"ha"));
// ### 30 — indexOf
// Find the position of the letter `"o"` in the string `"Hello World"`.
let s40="hello world";
console.log(s40.indexOf('o'));
