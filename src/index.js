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

const sum = numbers.reduce((total, num) => total * num,0);

console.log(sum);
