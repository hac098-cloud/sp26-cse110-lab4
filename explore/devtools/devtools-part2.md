## What was the bug?
The bug was that num1 and num2 were strings, so the program concatenated them instead of adding them. That is why 2 and 3 became 23.

## How would you fix it?
I would convert both input values to numbers before adding them.

```javascript
let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);