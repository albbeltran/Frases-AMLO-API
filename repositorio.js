const Frases = require("./frases");

module.exports = {
  getRandom: function getRandom(numberOfFrases) {
    const limit =
      numberOfFrases > Frases.length ? Frases.length : numberOfFrases;

    const out = new Array(limit);

    const availableFrases = Frases.slice();

    for (let i = 0; i < limit; i++) {
      out[i] = availableFrases.splice(
        Math.floor(Math.random() * availableFrases.length),
        1
      )[0];
    }

    return out;
  },
};
