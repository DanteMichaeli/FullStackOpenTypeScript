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
  console.log(ret);
  return ret;
};

calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2);
