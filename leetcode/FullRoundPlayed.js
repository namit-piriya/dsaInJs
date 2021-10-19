var numberOfRounds = function (startTime, finishTime) {
  const [shr, smin] = startTime.split(":").map((_) => Number(_));
  const [ehr, emin] = finishTime.split(":").map((_) => Number(_));
  const first = 0;
  const last = 24 * 60;
  let start = shr * 60 + smin;
  const end = ehr * 60 + emin;
  let count = 0;
  for (let i = first; i <= last; i += 15) {
    if (start >= i && Math.abs(start - i) <= 15 && end >= start + 15) {
      count++;
      start = i + 15;
    }
  }
  return count;
};

console.log(numberOfRounds("20:00", "06:00"));
console.log(numberOfRounds("12:01", "12:44"));
console.log(numberOfRounds("00:00", "23:59"));
