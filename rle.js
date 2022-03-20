// Дана строка (возможно, пустая) состоящая из букв A-Z:
//AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB Нужно написать функцию RLE, которая на выходе даст строку вида A4B3C2XYZD4E3F3A6B28


function RLE(str) {
    let growingString = "";
  let counter = 1;
  for (let i = 1; i <= str.length; i++) {
    if (str[i - 1] === str[i]) {
      counter++;
    } else if (str[i - 1] !== str[i]) {
      if (counter > 1) {
        growingString += str[i - 1] + counter
      } else growingString += str[i - 1];
      counter = 1;
    }
  }
  return growingString;
}
console.log(RLE("AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"));
