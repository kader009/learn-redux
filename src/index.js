
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


