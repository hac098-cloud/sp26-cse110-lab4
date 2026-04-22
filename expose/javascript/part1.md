1. values added: 20
2. final result: 20
3. should not use `var` because it is function-scoped instead of block-scoped. This can cause unexpected behavior, make code harder to read, and create bugs such as naming conflicts or variables being used outside the block where they were declared.
4. values added: 20
5. Line 13 causes an error: `ReferenceError: result is not defined`. This happens because `result` was declared with `let`, and `let` is block-scoped, so it cannot be accessed outside the `if` block where it was declared.
6. Line 9 does not print anything because the code throws an error first on line 7. Since `result` was declared with `const`, it cannot be reassigned. The error is `TypeError: Assignment to constant variable.`
7. Line 13 also does not print anything because the program already stopped when the error occurred on line 7.