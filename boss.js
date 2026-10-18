
/*
BOSS ROUND

Challenge 18: validatePassword(pw)
Pseudocode:
1. Create an empty errors array.
2. Check the password length.
3. Check for uppercase, lowercase, digit, and special character.
4. Check that there are no spaces.
5. Return an object with valid and errors.
*/

function validatePassword(pw) {
  let errors = [];

  if (pw.length < 8) {
    errors.push("Password must contain at least 8 characters.");
  }

  if (!/[A-Z]/.test(pw)) {
    errors.push("Password must contain an uppercase letter.");
  }

  if (!/[a-z]/.test(pw)) {
    errors.push("Password must contain a lowercase letter.");
  }

  if (!/[0-9]/.test(pw)) {
    errors.push("Password must contain a digit.");
  }

  if (!/[!@#$%^&*]/.test(pw)) {
    errors.push("Password must contain a special character (!@#$%^&*).");
  }

  if (/\s/.test(pw)) {
    errors.push("Password must not contain spaces.");
  }

  return {
    valid: errors.length === 0,
    errors: errors
  };
}

console.log("Challenge 18: Password");
console.log(validatePassword("Hello123!"));
console.log(validatePassword("hello"));
console.log(validatePassword("Hello 123!"));

/*
Challenge 19: romanNumeral(n)
Pseudocode:
1. Reject numbers outside 1 to 3999.
2. Store Roman numeral values from largest to smallest.
3. Loop through the values.
4. While the number is large enough, add the symbol
   and subtract its value.
5. Return the Roman numeral.
*/

function romanNumeral(n) {
  if (!Number.isInteger(n) || n < 1 || n > 3999) {
    return "Invalid";
  }

  const values = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];

  let result = "";

  for (let i = 0; i < values.length; i++) {
    while (n >= values[i][0]) {
      result += values[i][1];
      n -= values[i][0];
    }
  }

  return result;
}

console.log("\nChallenge 19: Roman Numeral");
console.log(romanNumeral(1994)); // MCMXCIV
console.log(romanNumeral(9)); // IX
console.log(romanNumeral(4000)); // Invalid

/*
Challenge 20: nationalIdCheck(id)
Pseudocode:
1. Check that the ID contains exactly 16 digits.
2. Check that the first digit is 1.
3. Extract the birth year from digits 2 to 5.
4. Check that the year is between 1900 and the current year.
5. Check that the sixth digit is 7 or 8.
6. Return true if all checks pass, otherwise return a message.
*/

function nationalIdCheck(id) {
  if (!/^\d{16}$/.test(id)) {
    return "Invalid: ID must contain exactly 16 digits.";
  }

  if (id[0] !== "1") {
    return "Invalid: First digit must be 1.";
  }

  let birthYear = Number(id.slice(1, 5));
  let currentYear = new Date().getFullYear();

  if (birthYear < 1900 || birthYear > currentYear) {
    return "Invalid: Birth year is out of range.";
  }

  if (id[5] !== "7" && id[5] !== "8") {
    return "Invalid: Sixth digit must be 7 or 8.";
  }

  return true;
}

console.log("\nChallenge 20: National ID");
console.log(nationalIdCheck("1199812345678901"));
console.log(nationalIdCheck("2199812345678901"));
console.log(nationalIdCheck("12345"));
