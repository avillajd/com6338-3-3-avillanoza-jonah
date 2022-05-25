# Debugging in JavaScript

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)

&nbsp;
## Console.log

Many students struggle when first learning to program for a number of reasons. One reason is attempting to write an entire program before running their code. If the program has errors, students realize they've already written quite a few lines of code and it's not obvious where the mistake was made.

Instead of thinking about code as an entire program, it's very helpful to analyze code line-by-line to understand where errors may lie.

Consider the following program:

```js
var btn = document.getElementById('count')
var countDisp = document.getElementById('countDisplay')
var counter = 0

btn.onclick = function() {
  counter++
  updateCountDisp()
}

function updateCountDisp() {
  countDisp.textContent = count
}
```
&nbsp;

When the user clicks a button, the program is supposed to increment `counter` and display the current count on the page. However, when the program runs, nothing changes on the page and no errors are thrown in the console.

One useful tool for debugging issues such as these is `console.log`.

It's helpful to take a systematic approach to debugging programs. If we refer to the above code, we can break the code down into sections:

1. declaring global variables and getting references to HTML elements
1. attaching an event listener to a button
1. incrementing the `counter` variable
1. displaying the updated count on the page

First let's check our global variables:

```js
var btn = document.getElementById('count')
var countDisp = document.getElementById('countDisplay')
var counter = 0
console.log(btn)
console.log(countDisp)
console.log(counter)
```
&nbsp;

If any of these values turn up `null` or `undefined`, we know we've made a mistake and can examine further. However, all is well here.

Next let's check our event listener:

```js
btn.onclick = function() {
  console.log('button clicked!')
  counter++
  updateCountDisp()
}
```
&nbsp;

After we click our button, we can look to see that our `console.log` is firing with each click. If not, we know our button click event code is wrong.

Next let's check that our variable is incrementing with each click:

```js
btn.onclick = function() {
  counter++
  console.log(counter)
  updateCountDisp()
}
```
&nbsp;

We should see our `counter` variable increasing with each click.

Lastly let's check our count element code:

```js
function updateCountDisp() {
  console.log(count)
  countDisp.textContent = count
}
```
&nbsp;

Here we'll see that `count` is `undefined`. At last! If we double check our code we'll notice that our counter variable is named `counter`, and yet we're referencing `count`. If we correct our variable name, our code will work:

```js
var btn = document.getElementById('count')
var countDisp = document.getElementById('countDisplay')
var counter = 0

btn.onclick = function() {
  counter++
  updateCountDisp()
}

function updateCountDisp() {
  countDisp.textContent = counter // NOT count
}
```
&nbsp;

**Note:** This is an example of a "silent error" in JavaScript. The variable we were referencing was undefined, and yet we had no errors in our console.

&nbsp;
## Debugger

The other method we can use to debug our code is by using `debugger`. To use `debugger`, simply write `debugger` within your code, open Chrome's devtools and run the code.

Here's a simple example:

```js
debugger
var num1 = 3;
var num2 = 10;
var product = num1 * num2;
var quotient = product / 6;
var squared = quotient ** 2;
var cubed = squared ** 3;
var remainder = cubed % 7;
```
&nbsp;

If we run this code, it's unlikely we would know what's happening within each line at a glance. However, if we open devtools with our `debugger` statement in place we should be able to see what's happening step by step.

Once you've got your code open in the debugger (you may have to run it twice for Chrome's "Sources" tab to open on your code), you'll see controls like: ▶ ↗↘ ⬇ ⬆ ➡

- ▶ will resume the code execution. Click this to un-freeze the code.
- ↗↘ is the "step-over" function. This should skip over the next function call.
- ⬇ is the "step-into" function. This will enter the next function call.
- ⬆ is the "step-out" function. This will exit out of a function that was stepped into.
- ➡ is the "step" function. This moves through the code line by line.

Out of those controls, by far the most frequently used controls are ▶ (resume) and ➡ (step). Generally it's enough to step through the code with ➡ and use ▶ when you're done examining the code execution.

If you run the code in the example in the console with the `debugger` statement, you'll notice you can mouse-over all the variables and see their values at each line.

&nbsp;
## Determining when to use `console.log` vs. `debugger`

Because of the insight one can glean from `debugger`, it might seem like an enterprising programmer would want to always depend on `debugger` when debugging code. However, you'll find that often a quick `console.log` is sufficient to figure out what's happening within your code.

There are many JavaScript developers out there that rely solely on `console.log` for all of their debugging needs.

&nbsp;
## Common JavaScript Errors

&nbsp;
### **Syntax errors**

By far the most common error is the syntax error. This usually amounts to a missing `)` or `}` somewhere in the code. However these can arise in more malicious forms like:

```js
if (userWantsCake = true) {
  giveThemCake()
}
```
&nbsp;

In this example the developer wrote `=` instead of `===` and is likely wondering why she's always giving cake to users even if they don't want any. (The single equals sign assigns a value, so the if statement is always `true`.)

**Solution:** There's no magical bullet for syntax errors, but there are a few things we can do to prevent them. The first is to enforce consistent code formatting, or, in other words, to write neater code. Writing neatly formatted code makes it easier to spot missing parentheses and curly braces. Another way to avoid syntax errors is to practice paying attention to detail in your code. This comes with time and experience naturally, but early on this can be achieved by ensuring each line of code works as you expect it by logging/debugging each line of code and manually testing your code in smaller chunks as you write it.

&nbsp;
### **Type errors**

Another common JavaScript error that plagues developers is a type error. Type errors usually arise when we write code assuming that our data is of a certain type, but when the same code is run we end up with different types.

Here's a common example:

```js
var buttons = document.querySelectorAll('buttons')

for (let i = 0; i < buttons.length; i++) {
  button.onclick = doStuff
}
```
&nbsp;

The code above seems legitimate at a glance, but notice the CSS selector passed to `querySelectorAll`. The programmer likely meant to target `button` or `.button`, but instead wrote `buttons` which is not a valid element. This means `querySelectorAll` will return `null` instead of a `NodeList`, and we'll get an error in the `for` loop below when trying to access `.length` on `buttons` (`null.length`).

Here's another example:

```js
var userAge = prompt("how old are you?")

if (userAge < 60) {
  alert("In 20 years you'll be " + (userAge + 20))
}
```
&nbsp;

In the above code, our `if` statement seemingly works as it should as long as the user enters a valid number. However when they do, we'll get an error in our `alert`. If we enter `30`, we'll get `In 20 years you'll be 3020`. The reason is that JavaScript is doing a lot of type conversion in the example code. As long as the user clicks "OK", the `prompt` function always returns a string. That means if we type `30`, we'll get `"30"` in our code. This is coerced into a number in the `if` statement, but in our `alert`, because `userAge` is a string, the number `20` is coerced into a string when we use the `+` operator.

**Solution:** The best way to combat these errors is to avoid JavaScript coercion whenever possible in your code. This means using things like `===` (instead of `==`) and [the `typeof` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) in `if` statements to ensure that we're working with the types we think we're working with. Some developers refer to this as "defensive coding".