var reverseWords = function (s) {
  let ar = s.split(" ");
  let reversed = ar.map((str) => {
    let charAr = str.split("");
    charAr.reverse();
    return charAr.join("");
  });
  return reversed.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("God Ding"));
