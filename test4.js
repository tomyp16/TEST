/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

let temp = [];
for (let i = 0; i <= numbers.length; i++) {
  if (numbers[i] == 0) {
    continue;
  }
  if (numbers[i] != undefined) {
    temp.push(numbers[i]);
  }
}
const n = temp.length;
function result(numbers, n) {
  let total = Math.floor(((n + 1) * (n + 2)) / 2);
  for (let i = 0; i < n; i++) total -= numbers[i];
  return total;
}
console.log(result(temp, n));
