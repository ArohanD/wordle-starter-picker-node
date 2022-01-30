const InteractiveDictionary = require("./words.js");

const corpusDictionary = new InteractiveDictionary(5, true);
const corpusCommonLetters = corpusDictionary.getCommonLetters();
console.log(corpusCommonLetters); // same common letters, just different order
console.log(corpusDictionary.getIdealStarters());

const dictionary = new InteractiveDictionary(5);
console.log(dictionary.getCommonLetters());
console.log(dictionary.getIdealStarters()); // womp womp
console.log(dictionary.matchWords(corpusCommonLetters.slice(0, 5), ""));
