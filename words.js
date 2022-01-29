/** words from https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json */
const rawWords = require("./words.json");

class InteractiveDictionary {
  constructor(numLetters) {
    const allWords = Object.keys(rawWords);
    const filter = (word, numLetters) => {
      return word.length === numLetters;
    };
    this.dictionary = allWords.filter((word) => filter(word, numLetters));
  }

  getWords() {
    return this.dictionary;
  }

  getCommonLetters() {
    const letterMap = {};
    this.dictionary.forEach((word) => {
      for (const letter of word) {
        if (letterMap[letter]) {
          letterMap[letter]++;
        } else {
          letterMap[letter] = 1;
        }
      }
    });
    const letterArray = Object.keys(letterMap);
    letterArray.sort((a, b) => letterMap[b] - letterMap[a]);
    return letterArray;
  }

  wordFilter(word, includeString, excludeString, allowDoubles) {
    for (let i = 0; i < includeString.length; i++) {
      if (!word.includes(includeString[i])) {
        return false;
      }
    }
    for (let i = 0; i < excludeString.length; i++) {
      if (word.includes(excludeString[i])) return false;
    }
    if (allowDoubles && new Set(word.split("")).size < word.length)
      return false;
    return true;
  }

  matchWords(includeString, excludeString) {
    const match = [];
    this.dictionary.forEach((word) => {
      if (this.wordFilter(word, includeString, excludeString)) {
        match.push(word);
      }
    });
    return match;
  }

  getIdealStarters() {
    const commonLetters = this.getCommonLetters();
    const idealStarter = this.matchWords(commonLetters.slice(0, 5), "");
    return idealStarter;
  }
}

module.exports = InteractiveDictionary;

const dictionary = new InteractiveDictionary(5);
console.log(dictionary.getIdealStarters());
console.log(dictionary.matchWords("rhi", "duklqupmayet"));
console.log(dictionary.getWords());
