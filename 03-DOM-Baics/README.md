# DOM Manipulation Notes 🧠💻

These notes cover the basics of working with the **Document Object Model (DOM)** in JavaScript, specifically how to **select** and **manipulate** HTML elements using the DOM API.

## 📚 Topics Covered

- What is the DOM?
- Selecting elements in the DOM
- Manipulating element content
- Basic example with `querySelector`

## 🌐 What is the DOM?

The **DOM (Document Object Model)** is a programming interface for web documents. It represents the page structure as a tree of objects, which JavaScript can interact with to change content, structure, or styling dynamically.

## ✋ Selecting DOM Elements

JavaScript provides several methods to select elements:

```js
document.querySelector(selector);      // Selects the first matching element
document.querySelectorAll(selector);   // Selects all matching elements (NodeList)
document.getElementById(id);           // Selects by ID
document.getElementsByClassName(name); // Selects by class (HTMLCollection)
document.getElementsByTagName(name);   // Selects by tag name (HTMLCollection)

element.textContent = 'New text';   // Changes the text content
element.innerHTML = '<strong>Hi</strong>'; // Changes inner HTML
element.style.color = 'blue';       // Changes inline CSS style

