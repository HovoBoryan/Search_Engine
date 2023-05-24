const fs = require('fs');

// Функция для парсинга файла и создания db.txt
function parseFiles() {
  const file1 = fs.readFileSync('1.txt', 'utf8');
  const file2 = fs.readFileSync('2.txt', 'utf8');

  const words1 = file1.split(/\s+/);
  const words2 = file2.split(/\s+/);

  const uniqueWords = new Set([...words1, ...words2]);
  const dbLines = Array.from(uniqueWords).map(word => {
    const file1ContainsWord = words1.includes(word) ? '1' : '';
    const file2ContainsWord = words2.includes(word) ? '2' : '';
    const fileNumbers = [file1ContainsWord, file2ContainsWord].filter(Boolean).join(',');
    return `${word}:${fileNumbers}`;
  });

  const dbContent = dbLines.join('\n');
  fs.writeFileSync('db.txt', dbContent, 'utf8');
}

// Вызываем функцию для парсинга файлов и создания db.txt
parseFiles();
