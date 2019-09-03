const HashMap = require('./HashMap');
const lor = new HashMap();
HashMap.MAX_LOAD_RATIO = 0.5;
HashMap.SIZE_RATIO = 3;

function main() {
  lor.set('Hobbit', 'Bilbo');
  lor.set('Hobbit', 'Frodo');
  lor.set('Wizard', 'Gandalf');
  lor.set('Human', 'Aragorn');
  lor.set('Elf', 'Legolas');
  lor.set('Maiar', 'The Necromancer');
  lor.set('Maiar', 'Sauron');
  lor.set('RingBearer', 'Gollum');
  lor.set('LadyOfLigh', 'Galadriel');
  lor.set('HalfElven', 'Arwen');
  lor.set('Ent', 'Treebeard');
}

//main();

function removeDups(str) {
  const strMap = new HashMap();
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    try {
      strMap.get(str[i]);
    } catch {
      newStr += str[i];
      strMap.set(str[i], str[i]);
    }
  }
  console.log(newStr);
  return newStr;
}

function isPalindrome(str) {
  const strMap = new HashMap();
  let letterList = '';

  for (let i = 0; i < str.length; i++) {
    try {
      let newNum = strMap.get(str[i]) + 1;
      strMap.set(str[i], newNum);
    } catch {
      strMap.set(str[i], 1);
      letterList += str[i];
    }
  }

  let odds = 0;
  let evens = 0;

  for (let i = 0; i < letterList.length; i++) {
    if (strMap.get(letterList[i]) % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }

  if (odds > 1) {
    return false;
  } else {
    return true;
  }
}

function anagramGrouper(arr, result = []) {
  if (arr.length === 0) {
    return result;
  }

  let tempResult = [];
  const anaMap = new HashMap();
  for (let i = 0; i < arr[0].length; i++) {
    try {
      let newNum = anaMap.get(arr[0][i]) + 1;
      anaMap.set(arr[0][i], newNum);
    } catch {
      anaMap.set(arr[0][i], 1);
    }
  }
  let i = 0;
  outer: while (i < arr.length) {
    let word = arr[i];
    if (removeDups(word).length !== anaMap.length) {
      i++;
      continue;
    }
    for (let j = 0; j < word.length; j++) {
      try {
        anaMap.get(word[j]);
      } catch {
        i++;
        continue outer;
      }
    }

    tempResult.push(arr.splice(i, 1)[0]);
  }

  result.push(tempResult);

  return anagramGrouper(arr, result);
}

console.log(
  anagramGrouper(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'])
);

console.log(removeDups('cars'));



