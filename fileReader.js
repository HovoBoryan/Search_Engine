const fs = require('fs')

fs.readFile('words_alpha.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
    const words = data.split(/[/ ._:=-?<>]/);

    const cleanedWords = words.map(word => word.replace(/[^a-zA-Zа-я]/g, '').toLowerCase().replace(/s$/, ''));
    console.log(cleanedWords);
});
