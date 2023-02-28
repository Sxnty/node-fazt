const { create } = require("domain");
const { writeFile } = require("fs/promises");
const { createReadStream } = require("fs");

const createBigFile = async () => {
  await writeFile("../data/bigfile.txt", "hello world".repeat(1000));
};

const stream = createReadStream("../data/bigfile.txt", "utf-8");

stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("end", () => {
  console.log("end");
});
stream.on("error", (error) => {
  console.log(error);
});


/* createBigFile(); */
