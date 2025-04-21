# JavaScript: Call Stack and Execution Context

## 📚 Topics Covered
- Execution Context
- Single Threaded and Synchronous Behavior
- Call Stack
- Stack Trace Errors
- Practical Examples

---

## 🧠 Execution Context
- Everything in JavaScript happens inside an **Execution Context**.
- JavaScript is a **single-threaded** and **single-concurrent** language — it can only handle **one task at a time**.
- JavaScript uses a **single call stack** where code execution is managed.

---

## 📦 Call Stack
- A **Call Stack** is a data structure that **records function calls** (tracks where we are in the program).
- When a function is called, it is **pushed** onto the stack.
- When the function finishes executing, it is **popped** off the stack.

### Key Points:
- **Single-threaded:** JavaScript can execute only one command at a time.
- **Synchronous execution:** Code runs in sequence.
- **Stack Frame:** Each function call creates a frame that holds its variables and instructions.
- **LIFO (Last In, First Out):** The last function called is the first to finish and leave the stack.

---

## 🛠 Example: Simple Call Stack Usage

```javascript
var n = 2;

function square(num) {
    var ans = num * num;
    return ans;
}

var square2 = square(n);
var square4 = square(4);

console.log(square2); // 4
console.log(square4); // 16
