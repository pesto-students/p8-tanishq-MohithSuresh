function maxSubArraySum(a) {
  let newArray = [];
  let guide = 1;

  for (let i = 0; i < a.length; i++) {
    if (guide > 0) {
      for (let j = 0; j < a[i].length; j++) {
        newArray.push(a[i][j]);
      }
    } else {
      for (let j = a[i].length - 1; j >= 0; j--) {
        newArray.push(a[i][j]);
      }
    }
    guide *= -1;
  }

  return newArray;
}
// let example = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let answer = maxSubArraySum(example);
// console.log(answer);
