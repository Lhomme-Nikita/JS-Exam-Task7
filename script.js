const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

function showObjectKeys(obj) {
  return Object.keys(obj);
}

const keysArray = showObjectKeys(audi);
console.log(keysArray);
