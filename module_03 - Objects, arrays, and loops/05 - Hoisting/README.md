# Hoisting

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)

Much like the JavaScript runtime will automatically place omitted semicolons on semicolon-less statements, it will 'hoist' variable and function declarations to the top of a script when that script is run. This can assist in avoiding errors during runtime related to invoking variables and functions before they're declared. (Remember JavaScript executes from top to bottom.)

Example:

```js
console.log(banana); // does not error

var banana;
```
&nbsp;

The reason the above code does not error is due to hoisting. During runtime, the code becomes:

```js
var banana;
console.log(banana);
```
&nbsp;

The same thing happens with functions:

```js
myFunction(); // doesn't error, logs 'woohoo!'

function myFunction() {
  console.log('woohoo!')
}
```
&nbsp;

The above code becomes:

```js
function myFunction() {
  console.log('woohoo!')
}
myFunction();
```
&nbsp;

However, when hoisting variables, _only the declaration portion is hoisted_:

```js
console.log(banana); // prints undefined

var banana = 'yummy';
```
&nbsp;

The above code does not print `'yummy'`. The reason is that the code becomes the following at runtime:

```js
var banana;
console.log(banana); // prints undefined
banana = 'yummy';
```
&nbsp;

This same behavior applies to functions stored in variables:

```js
// this will error with 'myFunction is not a function'
myFunction();

var myFunction = function() {
  console.log('yippee!');
}
```
&nbsp;

The above code becomes the following at runtime:

```js
var myFunction;
myFunction();
myFunction = function() {
  console.log('yippee!');
}
```
&nbsp;

**Because of the above behavior, it is recommended to declare all functions and variables before invoking them.**