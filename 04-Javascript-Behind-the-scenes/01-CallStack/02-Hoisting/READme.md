# 01. Hoisting in JavaScript

## ✅ What is Hoisting?

- JS moves all variable and function declarations to top of scope during **Memory Creation Phase**.
- **Variables** (`var`) ➔ initialized with `undefined`.
- **Functions** ➔ full function body stored.
- **let/const** ➔ hoisted but stay in **Temporal Dead Zone (TDZ)**.

## ✅ Memory Phase vs Execution Phase

- **Memory Phase**: variables and functions are allocated memory.
- **Execution Phase**: code runs line by line.

## ✅ Important Points

| Variable Type           | Hoisted? | Initialization  | Access Before Declaration |
|:-------------------------|:---------|:----------------|:---------------------------|
| var                      | Yes      | `undefined`      | allowed (prints undefined) |
| let/const                 | Yes      | No (TDZ)         | ReferenceError             |
| function declaration     | Yes      | function body    | allowed                    |
| function expression (var) | var hoisted | `undefined`   | TypeError if called        |

---

## ✅ Practice Questions and Answers

### Q1.
```javascript
console.log(name);
var name = 'Luffy';
```
**Answer:** `undefined`

---

### Q2.
```javascript
console.log(printName());
function printName() {
  return 'Zoro';
}
```
**Answer:** `"Zoro"`

---

### Q3.
```javascript
console.log(printAge);

var printAge = function() {
  return 21;
};
```
**Answer:** `undefined`

(NOTE: If we did `printAge()` directly here, we would get **TypeError: printAge is not a function**.)

---

### Q4.
```javascript
console.log(city);

let city = "Tokyo";
```
**Answer:** `ReferenceError: Cannot access 'city' before initialization`

(Because `let` is hoisted but stays in **TDZ**.)

---

## ✅ Conclusion

Hoisting is about **memory allocation before execution**. 
- **var** variables ➔ initialized with `undefined`.
- **function declarations** ➔ full function is hoisted.
- **let/const** ➔ exist in TDZ until their line is executed.

---

# Happy Coding! 🚀