const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);

const alphabetValue = (char) => char.charCodeAt(0) - "A".charCodeAt(0) + 1;

const nameScore = (name, index) => {
  let sum = 0;
  for (let char of name) {
    sum += alphabetValue(char);
  }
  return sum * (index + 1);
};

const calculateTotalScore = async () => {
  let data = await readFile("./names-problem-twenty-two.txt", "utf8"); // I did not upload the file, you can find it in project euler website
  let names = data
    .split(",")
    .map((name) => name.replace(/"/g, ""))
    .sort();
  return names.reduce((sum, name, index) => sum + nameScore(name, index), 0);
};

calculateTotalScore().then(console.log).catch(console.error);
