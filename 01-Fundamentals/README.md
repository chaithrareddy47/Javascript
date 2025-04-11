
# JavaScript Fundamentals – Part 1 🚀

## 📚 Topics Covered
- ✅ Console Output
- ✅ `if...else` Conditions
- ✅ Linking JavaScript Files
- ✅ Values and Variables
- ✅ Variable Naming Conventions
- ✅ `let`, `const`, and `var`
- ✅ Data Types in JavaScript
- ✅ Type Conversion & Coercion
- ✅ Operators (Arithmetic, Logical, Comparison)
- ✅ Template Literals & Multiline Strings
- ✅ Conditional Statements (`if/else`)
- ✅ Assignment Challenge – Country Info

---

## 💻 Console Output & Basics
```js
console.log('Hello World');

let js = 'amazing';
if (js === 'amazing') {
  console.log('Js is amazing');
} else {
  console.log('js is boring');
}

console.log(40 + 6 + 10 + 7);
```

---

## 🔗 Linking JavaScript Files
- Inline and External JS:
  ```html
  <script src="script.js"></script>
  ```

---

## 🧠 Values & Variables
```js
let firstName = "Jhonas";
console.log(firstName);
```

---

## 🏁 Assignment 01 – Country Info
```js
let country = 'India';
let continent = 'Asia';
let population = '10 million';

console.log(country);
console.log(continent);
console.log(population);
```

---

## 🧬 Data Types
```js
let jsIsFun = true;
console.log(typeof jsIsFun);

let dynamicValue = 'Dynamic';
dynamicValue = 23;
console.log(typeof dynamicValue);

let year;
console.log(typeof year);

console.log(typeof null);
```

---

## 🧪 `let`, `const`, and `var`
```js
let age = 20;
age = 30;

var myName = 'chai';
var myName = 'abcs';

const birthYear = 1998;

lastName = 'abcd'; // Global variable (bad practice)
```

---

## ➕ Operators
```js
const ageChai = 2025 - 1998;
console.log(ageChai);
```

---

## ✨ Template Literals
```js
const year = 2025;
const firstName = 'chai';
const birthYear = 1998;

const sentence = `I am ${firstName}, a ${year - birthYear} old student!`;
console.log(sentence);
```

---

## 🔀 `if...else` Statement
```js
const age = 17;
if (age >= 18) {
  console.log(`You are eligible 😁`);
} else {
  const yearsLeft = 18 - age;
  console.log(`You are not eligible 🤨. Wait ${yearsLeft} more years.`);
}
```

---

## 🔄 Type Conversion
```js
const sum = 35 + 'hello';
console.log(sum, typeof sum);
```

---



---

## ✅ Next Steps
- Type Coercion in detail
- Equality Operators (`==` vs `===`)
- Truthy & Falsy values
- Logical Operators

---
