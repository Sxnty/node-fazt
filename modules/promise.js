const { readFile } = require("fs/promises");

const readText = async () => {
  try {
    const result = await readFile("../data/first.txt", "utf-8");
    console.log(result);
    const result2 = await readFile("../data/second.txt", "utf-8");
    console.log(result2);
    const result3 = await readFile("../data/newFile.txt", "utf-8");
    console.log(result3);
  } catch (error) {
    console.log(error);
  }
};
readText();
