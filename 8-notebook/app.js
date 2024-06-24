const fs = require('fs');
const user = {
     firstname: 'pa',
     age: 26,
     isAdmin: true,
     phone: null,
     hobby: ['swim', 'movie'],
     address: { road: 'Param-5', province: 'bangkok'},
     college: undefined,
     sayHi: () => {},
};


const jsonString = JSON.stringify(user);
console.log(jsonString);
console.log(typeof jsonString);

fs.writeFile('user.json', jsonString,(err) =>{
     console.log('err', err);
} );

const data = JSON.parse(jsonString);
console.log(data);
console.log(typeof data);

