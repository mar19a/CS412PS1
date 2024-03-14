const reverseAlphabetical = str => {

  const cleanedStr = str.replace(/[^a-zA-Z]/g, '');

  const charArray = Array.from(cleanedStr);

  const sortedArray = charArray.sort((a, b) => b.localeCompare(a));

  const reversedStr = sortedArray.join('');

  return reversedStr;
}

// Test the function
const inputString = 'supercalifragilisticexpialidocious';
const inputString2 = 'exioi';
const result = reverseAlphabetical(inputString);
const result2 = reverseAlphabetical(inputString2);
console.log(result);
console.log(result2);


