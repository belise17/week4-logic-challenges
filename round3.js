
/*
ROUND 3: LOOPS & PATTERNS

Challenge 13: sumTo(n)
Pseudocode:
1. Start total at 0.
2. Loop from 1 to n.
3. Add each number to total.
4. Return total.

Comparison:
A loop is easy to understand step by step.
The formula n * (n + 1) / 2 is shorter and faster for large n.
*/

function sumTo(n) {
  if (!Number.isInteger(n) || n < 0) {
    return "Invalid";
  }

  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

console.log("Challenge 13: Sum To");
console.log(sumTo(5)); // 15
console.log(sumTo(10)); // 55
console.log(sumTo(0)); // 0

// Compare the loop result with the formula.
function sumToFormula(n) {
  if (!Number.isInteger(n) || n < 0) {
    return "Invalid";
  }

  return (n * (n + 1)) / 2;
}

console.log("Formula comparison:", sumToFormula(5)); // 15
console.log("Formula comparison:", sumToFormula(10)); // 55


/*
Challenge 14: isPrime(n)
Pseudocode:
1. If n is less than 2, return false.
2. Check divisors from 2 up to the square root of n.
3. If any divisor divides n evenly, return false.
4. Otherwise return true.
*/

function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log("\nChallenge 14: Is Prime");
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
console.log(isPrime(1)); // false
console.log(isPrime(-5)); // false


/*
Challenge 15: printPyramid(rows)
Pseudocode:
1. Start with an empty output string.
2. Loop from row 1 to rows.
3. Add spaces before the stars.
4. Add 2 * row - 1 stars.
5. Add a newline after each row.
6. Return the completed pyramid.
*/

function printPyramid(rows) {
  if (!Number.isInteger(rows) || rows < 0) {
    return "Invalid";
  }

  let result = "";

  for (let row = 1; row <= rows; row++) {
    let spaces = " ".repeat(rows - row);
    let stars = "*".repeat(2 * row - 1);

    result += spaces + stars;

    if (row < rows) {
      result += "\n";
    }
  }

  return result;
}

console.log("\nChallenge 15: Pyramid");
console.log(printPyramid(4));
console.log(printPyramid(1));
console.log(JSON.stringify(printPyramid(0)));


/*
Challenge 16: fibonacci(n)
Pseudocode:
1. Start with a = 0 and b = 1.
2. Repeat n times.
3. Add a to the result.
4. Calculate the next number as a + b.
5. Move a to b and b to the next number.
6. Return the numbers separated by commas.
*/

function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0) {
    return "Invalid";
  }

  let result = [];
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    result.push(a);

    let next = a + b;
    a = b;
    b = next;
  }

  return result.join(", ");
}

console.log("\nChallenge 16: Fibonacci");
console.log(fibonacci(8)); // 0, 1, 1, 2, 3, 5, 8, 13
console.log(fibonacci(1)); // 0
console.log(JSON.stringify(fibonacci(0))); // ""


/*
Challenge 17: guessingGameSimulator(secret)
Pseudocode:
1. Set low to 1 and high to 100.
2. Guess the middle number.
3. Log each guess.
4. If correct, return the number of guesses.
5. If too low, move low above the guess.
6. If too high, move high below the guess.
7. Stop when the secret is found.
*/

function guessingGameSimulator(secret) {
  if (!Number.isInteger(secret) || secret < 1 || secret > 100) {
    return "Invalid secret";
  }

  let low = 1;
  let high = 100;
  let guesses = 0;

  while (low <= high) {
    let guess = Math.floor((low + high) / 2);
    guesses++;

    console.log("Guess:", guess);

    if (guess === secret) {
      console.log("Correct!");
      return guesses;
    } else if (guess < secret) {
      low = guess + 1;
    } else {
      high = guess - 1;
    }
  }

  return guesses;
}

console.log("\nChallenge 17: Guessing Game");
console.log("Guesses needed:", guessingGameSimulator(50));
console.log("Guesses needed:", guessingGameSimulator(1));
console.log("Guesses needed:", guessingGameSimulator(100));
console.log("Invalid test:", guessingGameSimulator(101));
