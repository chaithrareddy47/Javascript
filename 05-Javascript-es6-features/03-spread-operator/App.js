/*
Spread Operator (...) Rules:
Spread is different from Rest.
Spread is used to expand an array or object wherever you want — beginning, middle, or end.

✅ Spread can be anywhere — not like Rest which must be at end.
*/


const fruits = ['apple', 'banana']
const newFruit = [ ...fruits,'mango']
console.log(newFruit);


const boys = ['Tom', 'Sam']
const girls = ['Anna', 'Rose']

const childern = [...boys, ...girls]
console.log(childern);


const user = {
    name: 'John',
    age: 30
}

const copyUser = { ...user, age: 31 }
console.log(copyUser);

const contact = { phone: 12345667 };
const address = { city: 'Mumbai', pincode: 52107 }

const profile = {...contact, ...address}
console.log(profile);

const greet = 'Hi!'
console.log([...greet]);

const maxNumbers = [10, 20, 30]
console.log(Math.max(...maxNumbers));




const todos = ['task1', 'task2']

console.log(...todos, 'task3');
