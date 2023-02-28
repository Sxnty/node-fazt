const { readFile } = require("fs");

/* new Promise((resolve, reject) => {
  readFile("../data/first.txt", "utf-8", (err, data) => {
    if (err) reject(err)
    resolve(data)
  });
}); */

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};
const readText = async () => {
  try {
    const result = await getText("../data/first.txt");
    const result2 = await getText("../data/secsond.txt");
    const result3 = await getText("../data/newFile.txt");
    console.log(result);
    console.log(result2);
    console.log(result3);
  } catch (error) {
    console.log(error);
  }
};
readText();
