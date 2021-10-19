var largestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    let no = Number.parseInt(Number(num[i]) % 2);
    if (no !== 0) {
      return num.substring(0, i + 1);
    }
  }
  return "";
};

console.log(largestOddNumber("23245"));
console.log(largestOddNumber("2324"));
console.log(largestOddNumber("52"));
console.log(largestOddNumber("4206"));
