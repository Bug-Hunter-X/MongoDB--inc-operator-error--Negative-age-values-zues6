# MongoDB $inc Operator Error: Negative Age Values
This repository demonstrates a common error when using the `$inc` operator in MongoDB to decrement a field (like `age`) and how to prevent negative values.

## Problem
The provided MongoDB update statement attempts to decrement the age field using `$inc: { age: -1 }`. If the age is already 0, this results in a negative age which can be undesirable.

## Solution
The solution involves a conditional update using the `$inc` operator only if the age is greater than zero. This prevents negative age values.

## How to run
1. Clone this repository.
2. Make sure you have MongoDB installed and running.
3. Run `bug.js` to see the incorrect behaviour. 
4. Run `bugSolution.js` to see the corrected behaviour.