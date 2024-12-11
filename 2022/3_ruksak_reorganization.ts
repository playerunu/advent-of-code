const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const lines = input.split('\n');
let total = 0;

for (let line of lines) {
  const first = line.substring(0, line.length / 2);
  const second = line.substring(line.length / 2);

//   console.log(first, second);

  let letters = new Set();
  for (let index = 0; index < first.length; index++) {
    letters.add(first[index]);
  }

  for (let index = 0; index < second.length; index++) {
    if (letters.has(second[index])) {
      console.log(second[index]);
      break;
    }
  }
}

console.log('a'.charCodeAt(0))
