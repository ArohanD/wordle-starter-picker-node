Quick class to help pick an ideal starter word, or check potential words if you get desperate. Either import the class or start throwing logs at the bottom of words.js. [Dictionary source](https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json).

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
