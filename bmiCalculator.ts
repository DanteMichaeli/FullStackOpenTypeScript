const calculateBmi = (height: number, weight: number): string => {
  const bmi = weight / Math.pow(height / 100, 2);
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal range";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
};

// isolate the real input args from extra info
const args = process.argv.slice(2);

//input validation
if (args.length !== 2) {
  console.log(
    "The function takes two positive numbers as args: height in cm and weight in kg."
  );
  process.exit(1);
}

const height = Number(args[0]);
const weight = Number(args[1]);

if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
  console.log("One (or both) of the arguments is not a positive number.");
  process.exit(1);
}

console.log(calculateBmi(height, weight));
