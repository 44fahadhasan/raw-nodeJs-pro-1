// math object - module scaffolding
const math = {};

// get a random number between two integer
math.getRandomNumber = (min, max) => {
  let minimun = min;
  let maximum = max;

  minimun = typeof min === "number" ? minimun : 0;
  maximum = typeof max === "number" ? maximum : 0;

  const randomNumber = Math.random() * (maximum - minimun + 1) + min;

  return Math.floor(randomNumber);
};

// export the library
module.exports = math;
