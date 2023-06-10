function positiveSum(arr) {
  //filter out the negative numbers in the array
  const positiveArray = arr.filter(n => n >= 0);
  //add the ramining positive numbers in the array
  const total = positiveArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  //return the total
  return(total);
}