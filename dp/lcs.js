process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function (data) {
  input_stdin += data;
});

process.stdin.on("end", function () {
  let ip = input_stdin.split("\n");
  const output = main(ip);
  process.stdout.write("" + output + "\n");
});

function main(ip) {
  const virus = ip[0];
  let tc = Number(ip[1]);
  const i = 2;
  const op = [];
  while (tc--) {
    op.push(lcs(virus, ip[i]));
  }
  return op;
}

function lcs(virus, sample) {
  const n = virus.length;
  const m = sample.length;
  const a = new Array(m + 1).fill(0);
  const dp = [];
  for (let i = 0; i <= n; ++i) {
    dp.push([...a]);
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; ++j) {
      if (virus[i - 1] == sample[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  if (dp[n][m] === sample.length) {
    return "POSITIVE";
  } else {
    return "NEGATIVE";
  }
}

lcs("coronavirus", "anc");
