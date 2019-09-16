let values = [34, 56, 117, 324, 183, 231, 72, 111, -10, 207]
let sum = values.reduce((previous, current) => current += previous);
let avg = sum / values.length;

let user = prompt('Enter SUM for the sum of the numbers in the array and AVG for the average of the numbers in the array.')
if (user === 'SUM') {
alert(sum)
} else if (user === 'AVG') {
  alert(avg)
} else {
  alert('Incorrect Command!')
  }
