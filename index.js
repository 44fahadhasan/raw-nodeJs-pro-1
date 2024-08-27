// dependencies
const { allWords } = require("./lib/para");
const { getRandomNumber } = require("./lib/math");

// app object - module scaffolding
const app = {};

// configuration
app.config = {
  eachTimeRun: 1000,
};

// print random word function
app.printWords = () => {
  const words = allWords();

  // total words numbers
  const totalWordNumber = words.length;

  // get random number
  const randomNumber = getRandomNumber(1, totalWordNumber);

  // print random word from all paragraph
  const randomWord = words[randomNumber - 1];

  // display random word
  console.log(randomWord);
};

// indefinitey word print
app.infiniteyPrint = () => {
  setInterval(app.printWords, app.config.eachTimeRun);
};

// invoke the function
app.infiniteyPrint();
