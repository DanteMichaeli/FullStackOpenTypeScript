interface Output {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (hours: number[], target: number): Output => {
  const periodLength = hours.length;
  const trainingDays = hours.filter((h) => h > 0).length;
  const average = hours.reduce((a, b) => a + b, 0) / periodLength;
  const success = average >= target;
  const rating = average > target ? 3 : average === target ? 2 : 1;
  const ratingDescription =
    rating === 3
      ? "You did great!"
      : rating === 2
      ? "Not too bad but could be better"
      : "You should try harder";
  const ret = {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };

  return ret;
};

// used for extracting the actual function args from the extra info
// new name due to package.json file leading to scope var redeclaration conflict
const argss = process.argv.slice(2);

// input validation
if (argss.length < 2) {
  console.log(
    "The function takes two+ arguments:\n1. target (number) - the target average of daily exercise hours (positive)\n2. daily hours - a sequence of numbers, representing daily exercise hours"
  );
  process.exit(1);
}

if (isNaN(Number(argss[0])) || Number(argss[0]) <= 0) {
  console.log("The target must be a positive number.");
  process.exit(1);
}

if (
  argss.slice(1).some((a) => isNaN(Number(a))) ||
  argss.slice(1).some((a) => Number(a) < 0)
) {
  console.log("All daily exercise hours must be non-negative numbers.");
  process.exit(1);
}

const numberHours = argss.slice(1).map((a) => Number(a));

console.log(calculateExercises(numberHours, Number(argss[0])));
