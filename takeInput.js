function main(input) {
  //Enter your code here
  process.stdout.write("Hello World!");
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input;
});

process.stdin.on("end", function () {
  main(stdin_input);
});
