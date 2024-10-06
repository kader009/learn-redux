const employ1 = { FirstName: 'kader', LastName: 'molla' };
const employ2 = { FirstName: 'abdul', LastName: 'rasel' };

function invite(greting1, greting2) {
  console.log(
    greting1 + ' ' + this.FirstName + ' ' + this.LastName + ' ' + greting2
  );
}

invite.call(employ1, 'Hello', 'How are you.');
invite.apply(employ2, ['Hello', 'How are you.']);
