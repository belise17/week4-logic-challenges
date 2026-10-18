
/*
ROUND 1: NUMBERS & CONDITIONS
*/

// CHALLENGE 1: isLeapYear(year)

/*
Understand: Input = year, output = true or false.
Examples: 2024 -> true, 1900 -> false, 2000 -> true.
Edge case: 2023 -> false.
Plan:
1. If the year is divisible by 400, return true.
2. If divisible by 100, return false.
3. If divisible by 4, return true.
4. Otherwise, return false.

Comparison: Using if statements is easier to read for beginners.
A shorter boolean expression is possible but may be harder to understand.
*/
function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}

console.log("Challenge 1: Leap Year");
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2023)); // false


// CHALLENGE 2: getBMICategory(weightKg, heightM)

/*
Understand: Input = weight in kg and height in metres.
Output = BMI category.
Examples: 50 kg, 1.7 m -> Normal; 45 kg, 1.7 m -> Underweight.
Edge case: height <= 0.
Plan:
1. Reject a height that is zero or negative.
2. Calculate BMI = weight / (height * height).
3. Return the correct category using conditions.
*/
function getBMICategory(weightKg, heightM) {
  if (heightM <= 0) return "Invalid height";
  if (weightKg < 0) return "Invalid weight";

  const bmi = weightKg / (heightM * heightM);

  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

console.log("\nChallenge 2: BMI");
console.log(getBMICategory(50, 1.7)); // Normal
console.log(getBMICategory(45, 1.7)); // Underweight
console.log(getBMICategory(90, 1.7)); // Obese
console.log(getBMICategory(60, 0));   // Invalid height


// CHALLENGE 3: motoFare(km)

/*
Understand: Input = distance in kilometres.
Output = moto taxi fare in RWF.
Examples: 1 km -> 300; 2 km -> 300; 3 km -> 407.
Edge case: zero or negative distance -> 0.
Plan:
1. If distance <= 0, return 0.
2. Start with a base fare of 300 RWF.
3. If distance exceeds 2 km, round up the extra kilometres.
4. Add 107 RWF for each extra kilometre.
*/
function motoFare(km) {
  if (km <= 0) return 0;

  if (km <= 2) return 300;

  const extraKm = Math.ceil(km - 2);
  return 300 + extraKm * 107;
}

console.log("\nChallenge 3: Moto Fare");
console.log(motoFare(1));    // 300
console.log(motoFare(3));    // 407
console.log(motoFare(2.5));  // 407
console.log(motoFare(0));    // 0
console.log(motoFare(-2));   // 0


// CHALLENGE 4: convertSeconds(total)

/*
Understand: Input = total seconds.
Output = a string in hours, minutes and seconds.
Examples: 7384 -> "2h 03m 04s"; 65 -> "0h 01m 05s".
Edge case: 0 -> "0h 00m 00s".
Plan:
1. Calculate whole hours using Math.floor.
2. Find remaining minutes.
3. Find remaining seconds.
4. Use padStart(2, "0") for minutes and seconds.
*/
function convertSeconds(total) {
  if (total < 0) return "Invalid";

  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");

  return `${hours}h ${paddedMinutes}m ${paddedSeconds}s`;
}

console.log("\nChallenge 4: Convert Seconds");
console.log(convertSeconds(7384)); // 2h 03m 04s
console.log(convertSeconds(65));   // 0h 01m 05s
console.log(convertSeconds(0));    // 0h 00m 00s
console.log(convertSeconds(3600)); // 1h 00m 00s


// CHALLENGE 5: changeMaker(amount)

/*
Understand: Input = an amount in RWF.
Output = counts of notes and coins needed.
Example: 7385 -> 5000 x 1, 2000 x 1, 100 x 3,
50 x 1, 20 x 1, 10 x 1, 5 x 1.
Edge case: 0 -> no notes or coins.
Plan:
1. List denominations from largest to smallest.
2. For each denomination, divide the remaining amount.
3. Record how many pieces are needed.
4. Subtract their value and continue with a loop.

Comparison: A loop handles every denomination consistently.
Writing a separate calculation for each note may work,
but creates more repeated code and is harder to maintain.
*/
function changeMaker(amount) {
  if (!Number.isInteger(amount) || amount < 0) {
    return "Invalid amount";
  }

  const denominations = [
    5000, 2000, 1000, 500, 100,
    50, 20, 10, 5, 1
  ];

  let remaining = amount;
  let result = "";

  for (let i = 0; i < denominations.length; i++) {
    const note = denominations[i];
    const count = Math.floor(remaining / note);

    if (count > 0) {
      if (result !== "") result += ", ";
      result += count + " x " + note;
      remaining = remaining - count * note;
    }
  }

  if (result === "") return "No notes or coins needed";

  return result;
}

console.log("\nChallenge 5: Change Maker");
console.log(changeMaker(7385));
// 1 x 5000, 1 x 2000, 3 x 100, 1 x 50, 1 x 20, 1 x 10, 1 x 5

console.log(changeMaker(1000)); // 1 x 1000
console.log(changeMaker(0));    // No notes or coins needed
console.log(changeMaker(17));   // 1 x 10, 1 x 5, 2 x 1
