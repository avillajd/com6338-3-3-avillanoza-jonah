# Scope

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)

"Scope" refers to the ability to access variables from different places in code. Up until now, we've declared all our variables and functions "globally", meaning our entire script has access to all of our variables and functions.

&nbsp;
## Global Variables

If we declare a variable globally, functions will be able to access that value in the upper scope:

```js
var global = 'celery'

function printGlobalVar() {
  console.log(global);
}

printGlobalVar(); // prints celery
```
&nbsp;

The function `printGlobalVar` is able to reach into the outer scope to access `global`.

&nbsp;
## Local Variables

However, what if we wish to obscure values from the rest of our code? We can utilize scope to do this.

Example:

```js
function myFunction() {
  var banana = 'yummy';
}

console.log(banana); // prints undefined
```
&nbsp;

In the above example, we've declared `banana` inside of a function. This scopes `banana` to that function. When we try to access `banana` in a `console.log`, we notice it prints `undefined`. The variable `banana` is scoped to `myFunction`

&nbsp;
## Functions in Functions

It's also possible to scope functions within functions:

```js
function myFunction() {
  function helperFunction() {
    console.log("I'm helping!")
  }
  helperFunction();
}

myFunction(); // prints "I'm helping!"
helperFunction(); // errors
```
&nbsp;
