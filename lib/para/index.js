// dependencies
const fs = require("fs");

// paragraph object - module scaffolding
const paragraph = {};

// get all words from paragraphs and returen the words
paragraph.allWords = () => {
  // read the paragraph file
  const allText = fs.readFileSync(`${__dirname}/paragraph.txt`, "utf8");

  // paragraph to words converted
  const words = allText?.split(" ");

  return words;
};

// export the library
module.exports = paragraph;
