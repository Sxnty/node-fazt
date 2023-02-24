const fs = require("fs");

const first = fs.readFileSync("../data/first.txt", "utf-8");
const second = fs.readFileSync("../data/second.txt").toString();

console.log(first);
console.log(second);

const title = "contenido del archivo";
fs.writeFileSync("../data/third.txt", title, {
  flag: "a",
});
