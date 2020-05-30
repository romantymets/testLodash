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
console.log(_.keys(user.location))
//показує чи є даний ключ в обєкті
console.log(_.has(user, 'location'))
//виводить новий обєкт тільки з вибраними значеннями оміт наоборот
console.log(_.pick(user, ['profile.name']))
//вертає масив з значаннями обєкта
console.log(_.values(user.location))
