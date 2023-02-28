const fs = require("fs");

/*                 Sync                 */

/* const first = fs.readFileSync("../data/first.txt", "utf-8");
const second = fs.readFileSync("../data/second.txt").toString();

console.log(first);
console.log(second);

const title = "contenido del archivo";
fs.writeFileSync("../data/third.txt", title, {
  flag: "a",
});
 */

/*                     Async                    */

fs.readFile("../data/first.txt", "utf-8", (error, data) => {
  if (error) console.log(error);
  console.log(data);
  fs.readFile("../data/second.txt", "utf-8", (error, data) => {
    if (error) console.log(error);
    console.log(data);

    fs.writeFile(
      "../data/newFile.txt",
      "archivo creado desde fs",
      (error, data) => {
        console.log(error);
        console.log(data);
      }
    );
  });
});
