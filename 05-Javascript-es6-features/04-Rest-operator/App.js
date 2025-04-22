/*
* Rest Operator is 3 dots (...) used to collect multiple elements into one array or object.

* It is called "rest" because it collects the rest of the values.
Where?	Example	Why?
1. In function parameters	function sum(...nums)	To accept any number of arguments
2. In array destructuring	[first, ...rest] = arr	To separate first few items and collect rest
3. In object destructuring	{name, ...details} = obj	To pick one property and collect remaining
*/

function greet(...names) {
    return names
}

greet('Tom', 'Jerry', 'Spike')