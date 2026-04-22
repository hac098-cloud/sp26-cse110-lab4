1. Line 12 prints `3`. This happens because `i` was declared with `var`, and `var` is function-scoped rather than block-scoped. After the loop finishes, `i` still exists outside the loop, and its final value is `3`.

2. Line 13 prints `150`. This happens because `discountedPrice` is declared with `var`, which is function-scoped. Even though it is declared inside the `for` loop, it can still be accessed outside the loop. Its final value is from the last iteration, which is `150`.

3. Line 14 prints `150`. This happens because `finalPrice` was declared with `var`, which is function-scoped. Even though its value changes inside the loop, it is still accessible after the loop ends. Its final value is from the last iteration, which is `150`.

4. The function returns `[50, 100, 150]`. This is because it loops through each price in the array, applies the 50% discount, rounds the result, and pushes each discounted value into the `discounted` array. After the loop finishes, the array of discounted prices is returned.

5. Line 12 causes a `ReferenceError: i is not defined` because `i` is declared with `let`, and `let` is block-scoped. This means `i` only exists inside the `for` loop and cannot be accessed outside of it.

6. Line 13 causes a `ReferenceError: discountedPrice is not defined` because `discountedPrice` is declared with `let`, and `let` is block-scoped. This means it only exists inside the `for` loop and cannot be accessed outside of it.

7. Line 14 prints `150`. This happens because `finalPrice` is declared with `let` outside the `for` loop, so it is available throughout the function. Its value is updated during each loop iteration, and after the last iteration its final value is `150`.

8. The function returns `[50, 100, 150]`. This is because the loop goes through each value in `prices`, applies the 50% discount, rounds the result, and stores each discounted value in the `discounted` array. After the loop finishes, the array `[50, 100, 150]` is returned.

9. Line 11 causes a `ReferenceError: i is not defined` because `i` is declared with `let`, and `let` is block-scoped. This means it only exists inside the `for` loop and cannot be accessed outside of it.

10. Line 12 prints `3` because `length` is assigned the value of `prices.length`, and the array `[100, 200, 300]` has 3 elements. Since `length` is declared with `const` in the function, it can still be accessed at line 12.

11. The function returns `[50, 100, 150]`. This is because the loop applies the 50% discount to each value in `prices` and pushes each discounted price into the `discounted` array. There is no error because `const` prevents reassignment of the array variable, but it still allows modifying the contents of the array.

12. student.name, student['Grad Year'], student.greeting(), student['Favorite Teacher'].name, student.courseLoad[0]

13. Arithmetic

A. `'3' + 2`  
Output: `'32'`  
Explanation: Since one value is a string, JavaScript converts `2` to `'2'` and concatenates them.

B. `'3' - 2`  
Output: `1`  
Explanation: The `-` operator converts both values to numbers, so `'3'` becomes `3`.

C. `3 + null`  
Output: `3`  
Explanation: `null` is converted to `0`, so the result is `3 + 0`.

D. `'3' + null`  
Output: `'3null'`  
Explanation: Since one value is a string, `null` becomes `'null'` and is concatenated.

E. `true + 3`  
Output: `4`  
Explanation: `true` is converted to `1`, so `1 + 3 = 4`.

F. `false + null`  
Output: `0`  
Explanation: `false` becomes `0` and `null` becomes `0`.

G. `'3' + undefined`  
Output: `'3undefined'`  
Explanation: Since one value is a string, `undefined` becomes `'undefined'` and is concatenated.

H. `'3' - undefined`  
Output: `NaN`  
Explanation: `'3'` becomes `3`, but `undefined` becomes `NaN`, so the result is `NaN`.


14. Comparison

A. `'2' > 1`  
Output: `true`  
Explanation: `'2'` is converted to the number `2`, and `2 > 1` is true.

B. `'2' < '12'`  
Output: `false`  
Explanation: Both are strings, so JavaScript compares them alphabetically/lexicographically. `'2'` is greater than `'1'`.

C. `2 == '2'`  
Output: `true`  
Explanation: `==` allows type conversion, so `'2'` is converted to `2`.

D. `2 === '2'`  
Output: `false`  
Explanation: `===` checks both value and type. One is a number and one is a string.

E. `true == 2`  
Output: `false`  
Explanation: `true` becomes `1`, so the comparison becomes `1 == 2`, which is false.

F. `true === Boolean(2)`  
Output: `true`  
Explanation: `Boolean(2)` is `true` because any nonzero number becomes `true`.


15. Explain the difference between the `==` and `===` operators. `==` checks loose equality, so JavaScript may convert the two values to the same type before comparing them.  
`===` checks strict equality, so both the value and the type must already be the same.

17. modifyArray([1,2,3], doSomething) returns [2,4,6].

19. -1 
    -4
    -3 
    -2

 