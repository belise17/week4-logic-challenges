
/*
ROUND 2: STRINGS

Challenge 6: reverseString(str)
Pseudocode:
1. Start with an empty string.
2. Loop from the last character to the first.
3. Add each character to the result.
4. Return the result.
*/

function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

console.log("Challenge 6: Reverse String");
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("")); // ""


/*
Challenge 7: countChar(str, char)
Pseudocode:
1. Convert the string and character to lowercase.
2. Start a counter at zero.
3. Loop through every character.
4. Increase the counter when it matches.
5. Return the counter.
*/

function countChar(str, char) {
  str = str.toLowerCase();
  char = char.toLowerCase();

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

console.log("\nChallenge 7: Count Character");
console.log(countChar("Banana", "a")); // 3
console.log(countChar("Hello", "L")); // 2
console.log(countChar("Hello", "z")); // 0


/*
Challenge 8: isPalindrome(str)
Pseudocode:
1. Convert the string to lowercase.
2. Remove spaces and punctuation.
3. Reverse the cleaned string using a loop.
4. Compare the cleaned string with its reverse.
5. Return true or false.
*/

function isPalindrome(str) {
  let cleaned = "";

  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    if (
      (code >= 97 && code <= 122) ||
      (code >= 48 && code <= 57)
    ) {
      cleaned += str[i];
    }
  }

  let reversed = "";

  for (let i = cleaned.length - 1; i >= 0; i--) {
    reversed += cleaned[i];
  }

  return cleaned === reversed;
}

console.log("\nChallenge 8: Palindrome");
console.log(isPalindrome("Never odd or even")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("")); // true


/*
Challenge 9: titleCase(str)
Pseudocode:
1. Split the sentence into words.
2. Start with an empty result.
3. Loop through the words.
4. Capitalize the first character of each word.
5. Join the words with spaces and return the result.
*/

function titleCase(str) {
  let words = str.toLowerCase().split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length === 0) {
      result.push("");
    } else {
      result.push(
        words[i][0].toUpperCase() + words[i].slice(1)
      );
    }
  }

  return result.join(" ");
}

console.log("\nChallenge 9: Title Case");
console.log(titleCase("welcome to kigali tech hub"));
console.log(titleCase("JAVASCRIPT IS FUN"));
console.log(titleCase(""));

/*
Challenge 10: maskPhone(phone)
Pseudocode:
1. Check that the phone has exactly 10 digits.
2. Check that it starts with 07.
3. If invalid, return "Invalid".
4. Otherwise show the first 3 and last 3 digits,
   replacing the middle 4 digits with ****.
*/

function maskPhone(phone) {
  if (!/^07\d{8}$/.test(phone)) {
    return "Invalid";
  }

  return phone.slice(0, 3) + "****" + phone.slice(7);
}

console.log("\nChallenge 10: Mask Phone");
console.log(maskPhone("0788123456")); // 078****456
console.log(maskPhone("0712345678")); // 071****678
console.log(maskPhone("12345")); // Invalid


/*
Challenge 11: longestWord(sentence)
Pseudocode:
1. Split the sentence into words.
2. Start with an empty longest word.
3. Loop through all words.
4. Replace the longest word only if a longer word is found.
5. Return the longest word.
*/

function longestWord(sentence) {
  let words = sentence.split(/\s+/);
  let longest = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i].replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");

    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log("\nChallenge 11: Longest Word");
console.log(longestWord("I love JavaScript")); // JavaScript
console.log(longestWord("cat dog sun")); // cat
console.log(longestWord("")); // ""


/*
Challenge 12: compress(str)
Pseudocode:
1. If the string is empty, return an empty string.
2. Loop through the characters.
3. Count consecutive occurrences of each character.
4. Add the character and its count to the result.
5. Return the result.
*/

function compress(str) {
  if (str.length === 0) {
    return "";
  }

  let result = "";
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += str[i - 1] + count;
      count = 1;
    }
  }

  return result;
}

console.log("\nChallenge 12: Compress");
console.log(compress("aaabccdddd")); // a3b1c2d4
console.log(compress("abc")); // a1b1c1
console.log(compress("")); // ""
