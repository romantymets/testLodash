const _  = require('lodash');

const user = {
  profile: {
    name: "Roman",
    surname: "Tymets",
    namber: 0988570008,
  },
  location:{
    sity:'Buchach',
    street: '1 December'
  }
}
// const getUserName = (userPar) => _.get(userParam, 'profile.name', 'default');
// console.log('set---',_.set(user, 'profile.name', 'vova'));
//виводить ключі обєкта
console.log('-----> keys',_.keys(user.location));
//показує чи є даний ключ в обєкті
console.log('-----has>',_.has(user, 'location'));
//виводить новий обєкт тільки з вибраними значеннями оміт наоборот
console.log('-----pick>',_.pick(user, ['profile.name']));
//вертає масив з значаннями обєкта
console.log('-----valye>',_.values(user.location));

const array1 = [1, 2];
const array2 = [3, 2, 4, 3, 2, 7, 9];
//виводить індекс масиву 3 значення з якого шукати
console.log('----->indexof', _.indexOf(array1, 2, 2));
// заповнює масив вказаними значенями (масив. значення. з якого. по яке)
console.log('-----fill>', _.fill(array1, 2, 3, 6));
console.log('-----difernce>', _.difference(array2, array1));
//союз двох масивів добавляє значення в кінець 1 масиву виключаючи рівні
console.log('-----union>', _.union(array1, array2));
console.log('-----without>', _.without(array2, 2));
// created new array with values two array
console.log('-----concat>', _.concat(array1, array2));
