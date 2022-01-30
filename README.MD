Quick class to help pick an ideal starter word, or check potential words if you get desperate. Jump in to `playground.js` for quick start. I like [nodemon](https://www.npmjs.com/package/nodemon) for development. [Dictionary source](https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json).

Sample uses:

```js
const dictionary = new InteractiveDictionary(5); // Initialize dictionary of 5 letter words
console.log(dictionary.getIdealStarters()); // [ 'arose', 'oreas', 'seora' ]
console.log(dictionary.matchWords("rhi", "duklqupmayet"));
/**
 * ['birch', 'chiro', 'chirr',
 * 'choir', 'chris', 'girsh',
 * 'ichor', 'irish', 'rhino',
 * 'rinch', 'rishi', 'roshi',
 * 'shirr', 'shris', 'sirih',
 * 'whirr', 'whirs']
 */
console.log(dictionary.getWords()); // returns all words in dictionary
```

Switch dictionary source to use [10,000 word corpus](https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english-usa-no-swears-medium.txt) using second param in initialization. Consider doing this if performance needs work.

```js
const corpusDictionary = new InteractiveDictionary(5, true);
```
