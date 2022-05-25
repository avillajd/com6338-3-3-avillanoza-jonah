# Loops

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)

Loops are a standard feature of most programming languages and JavaScript is no exception. Loops allow us to do things programmatically and respond to varying amounts of data.

&nbsp;
## For Loops

There are many different ways to write loops in JavaScript, however we will start with the humble `for` loop.

Let's loop 10 times with a `for` loop:

```js
for (let i = 0; i < 10; i++) {
  console.log(i)
}
// prints 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```
&nbsp;

`for` loops have 3 main components:

```js
/*    initializer  comparison  expression */
for (  let i = 0;    i < 10;       i++      ) {}
```
&nbsp;

The initializer runs once at the beginning of the loop, this is usually used to create and initiliaze a variable used to count iterations.

The comparison is the condition that, if met, will stop the loop.

The expression runs after each iteration of the loop.

So in essence, our loop above:

1. initializes a variable `i` that is assigned the value `0`.
1. before each iteration checks if `i` is less than `10`. If `i < 10`, the loop continues, if not, the loop ends.
1. Increments `i` after each iteration.

&nbsp;
### Looping over arrays

One of the most common use cases of a `for` loop is to iterate over all the items in an array:

```js
var favFoods = [
  'pizza',
  'more pizza',
  'chips (not crisps)',
  'soda (not pop)'
];

for (let i = 0; i < favFoods.length; i++) {
  console.log(favFoods[i]);
}
/*
prints:

pizza
more pizza
chips (not crisps)
soda (not pop
*/
```
&nbsp;

[You can read more about for loops on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

&nbsp;
## While loops

In contrast to the `for` loop, `while` loops can be useful for creating a loop that runs until a condition is met. For example, we could repeatedly ask the user a question until the user gives an answer:

```js
var answer
while(!answer) {
  answer = prompt('Do you know the muffin man!?')
}
```
&nbsp;