const employ1 = { FirstName: 'kader', LastName: 'molla' };
const employ2 = { FirstName: 'abdul', LastName: 'rasel' };

function invite(greting1, greting2) {
  console.log(
    greting1 + ' ' + this.FirstName + ' ' + this.LastName + ' ' + greting2
  );
}

// invite.call(employ1, 'Hello', 'How are you.');
// invite.apply(employ2, ['Hello', 'How are you.']);

// const array = [1, 2, 3, 4, 5];
// console.log(array.splice(1, 3));

function isEven() {
  const numbers = [1, 2, 3, 4, 5, 6];
  const getEven = (num) => num % 2 === 0;
  const evenNumber = numbers.filter(getEven);
  console.log(evenNumber);
}

// isEven()

(() => {
  // console.log('anonymous function');
})();

function createCounter() {
  let count = 0;

  return {
    increament: () => {
      count++;
      console.log(`count: ${count}`);
    },

    decreament: () => {
      count--;
      console.log(`count: ${count}`);
    },
  };
}

const counterResult = createCounter();

// new closure approch

function attackOnTitan() {
  const character1 = 'Amir';
  return () => {
    const character2 = 'Faisal';
    return () => {
      const character3 = 'David';
      return [character1, character2, character3];
    };
  };
}

// console.log(attackOnTitan()()());

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'Kader', age: 29 });
    }, 1000);
  });
};

const getData = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// getData();

const students = [
  { name: 'Ali', grade: 'A+' },
  { name: 'Ahmed', grade: 'A' },
  { name: 'Anas', grade: 'A-' },
];

const Group = Object.groupBy(students, (student) => student.grade);
// console.log(Group);

const firstOrder = () => {
  console.log('I am a first order function!');
};

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, num) => total * num, 0);
// console.log(sum);

function deepClone(value, seen = new Map()) {
  // Handle primitive types and functions directly
  if (typeof value !== 'object' || value === null) {
    return value;
  }

  // Handle circular references
  if (seen.has(value)) {
    return seen.get(value);
  }

  // Handle Date objects
  if (value instanceof Date) {
    return new Date(value);
  }

  // Handle Array objects
  if (Array.isArray(value)) {
    const arrCopy = [];
    seen.set(value, arrCopy); // Track the array for circular references
    value.forEach((item, index) => {
      arrCopy[index] = deepClone(item, seen);
    });
    return arrCopy;
  }

  // Handle Set objects
  if (value instanceof Set) {
    const setCopy = new Set();
    seen.set(value, setCopy); // Track the Set for circular references
    value.forEach((item) => {
      setCopy.add(deepClone(item, seen));
    });
    return setCopy;
  }

  // Handle Map objects
  if (value instanceof Map) {
    const mapCopy = new Map();
    seen.set(value, mapCopy); // Track the Map for circular references
    value.forEach((val, key) => {
      mapCopy.set(deepClone(key, seen), deepClone(val, seen));
    });
    return mapCopy;
  }

  // Handle objects
  const objCopy = {};
  seen.set(value, objCopy); // Track the object for circular references
  Object.keys(value).forEach((key) => {
    objCopy[key] = deepClone(value[key], seen);
  });
  return objCopy;
}

// Test the deepClone function with various data types, including circular references
const originalObject = {
  name: 'FoodLane',
  createdAt: new Date(),
  items: ['Burger', 'Pizza', 'Pasta'],
  nested: {
    number: 42,
    fun: () => 'Hello, World!',
  },
};

// Create a circular reference
originalObject.self = originalObject;

const clonedObject = deepClone(originalObject);

function countUniqueCharacters(string, memo = {}) {
  if (typeof string !== 'string') {
    throw new Error('Input must be a string');
  }

  if (string.length === 0) return 0;

  const chart = string[0];

  if (!memo[chart]) {
    memo[chart] = 0;
  } else {
    memo[chart]++;
  }

  countUniqueCharacters(string.substring(1), memo);

  return Object.keys(memo).length;
}

try {
  const result = countUniqueCharacters('kader molla');
  // console.log('unique character is:', result);
} catch (error) {
  console.log(error.message);
}

let a = 100;
{
  let a = 10;
}

function outerFunction() {
  const outerVariable = 'I am outerVariable';

  function InnerFunction() {
    console.log(outerVariable);
  }

  return InnerFunction;
}

const outerfunctionAccess = outerFunction();

// outerfunctionAccess()

function deLayedCounter(message, delay) {
  return function () {
    setTimeout(() => {
      console.log(message);
    }, delay);
  };
}

const countDelay = deLayedCounter('message show after 1 second', 1000);

// countDelay()

function countDown(start) {
  let count = start;

  return function () {
    if (count > 0) {
      console.log(count--);
    } else {
      console.log(`countDown finished`);
    }
  };
}

// const timer = setInterval(countDown(5), 1000);

setTimeout(() => {}, 2000);

const original = { a: 1, b: { c: 2 } };

const shallowCopy = { ...original };
// console.log(shallowCopy);

const deepCopy = JSON.parse(JSON.stringify(original));
// console.log(deepCopy);

function reverseString(str) {
  const reverse = str.split('').reverse().join('');
  return reverse;
}
// console.log(reverseString("hello"));

function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
// console.log(factorialize(5));

const person = {
  greet: function (name) {
    return `Hellow! ${name}`;
  },
};

const friend = Object.create(person); //todo: create a new object here
// console.log(friend.greet('kader'));

function sums(num1, num2) {
  num1 = 100;
  num2 = 200;
  return arguments[0] + arguments[1];
}

const gets = sums(10, 10);
// console.log(gets);

setTimeout(() => {
  // console.log(`i am printing 1 second later`);
}, [1000]);

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    // console.log(i);
  }, 1);
}

class User {
  #name;
  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

const user = new User('Abdul');
// console.log(user.getName());

function allSet(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}

// console.log(allSet(2)(3)(4)(5));

const object = { values: 29 };

function objectValue() {
  console.log(this.values);
}

function calculate(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

