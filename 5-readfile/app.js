const fs = require("fs");
console.log(process.argv);

const input1 = process.argv[2];
const input2 = process.argv[3];
const input3 = process.argv[4];

fs.appendFile("memory.txt", input1 + "\n", "utf-8", (err) => {
  console.log("error", err);
});

fs.appendFile("memory.txt", input2 + "\n", "utf-8", (err) => {
  console.log("error", err);
});

fs.appendFile("memory.txt", input3 + "\n", "utf-8", (err) => {
  console.log("error", err);
});
