//map to names
let john1 = { name: "John", age: 25 };
let pete1 = { name: "Pete", age: 30 };
let mary1 = { name: "Mary", age: 28 };

let users1 = [ john1, pete1, mary1 ];

let names = users1.map(user => user.name);

alert( names ); // John, Pete, Mary




//map to objects
let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let users2 = [ john2, pete2, mary2 ];

let usersMapped = users2.map(user => {
    return {fullName: `${user.name} ${user.surname}`, id: user.id}
});

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith




//sort users by age
let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 28 };

let arr3 = [ pete3, john3, mary3 ];

function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
}
sortByAge(arr3);

// now: [john, mary, pete]
alert(arr3[0].name); // John
alert(arr3[1].name); // Mary
alert(arr3[2].name); // Pete





//get average age
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(users) {
    return users.reduce((sum,curr) => sum + curr.age, 0) / users.length;
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28





//create keyed object from array
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }
  let usersById = groupById(users);
  console.table(usersById);