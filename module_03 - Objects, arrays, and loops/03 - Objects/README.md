# Objects

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)

Objects and Arrays are data structures that come built into JavaScript and can be immensely useful for organizing data. Instead of defining a separate variable for every piece of data, objects and arrays allow us to group data together in meaningful ways.

To declare an object in JavaScript, we can use [object literal notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer):

```js
var pizza = {};
```
&nbsp;

Data stored within objects is grouped by `key: value` pairs. We refer to data stored in an object as a "property". The data can be various different types:

```js
var pizza = {
  crust: 'thin',
  cheese: 'regular',
  paidFor: false,
  cost: 15.75,
};
```
&nbsp;

To access a value on an object we can use `[]` or `.` (dot) notation:

```js
var pizza = {
  crust: 'thin',
  cheese: 'regular'
};

console.log(pizza.crust); // thin
console.log(pizza['crust']); // thin
```
&nbsp;

We can also add properties to an object after it is created

```js
var pizza = {
  crust: 'thin'
};

pizza.cheese = 'regular';
```
&nbsp;

or overwrite properties:

```js
var pizza = {
  crust: 'thin',
  cheese: 'regular'
};

pizza.cheese = 'extra';
console.log(pizza.cheese); // extra
```
&nbsp;

Functions assigned to objects are referred to as methods, and can be called using dot syntax:

```js
var pizza = {
  crust: 'thin',
  cheese: 'regular',
  toss: function() {
    console.log('tossing the pizza!')
  }
};

pizza.toss() // 'tossing the pizza!'
// it's also possible to use [], but this should be avoided if possible
// pizza['toss']();
```
&nbsp;

Inside of methods, the parent object can be accessed using the `this` keyword. The context of `this` will depend on how the method is ultimately invoked. A basic rule of thumb is to look at the preceding item before the `.` and method name. Eg: In `pizza.sayName()`, `pizza` is to the left of the method, so `this` is `pizza`.:

```js
var pizza = {
  name: 'Bacon Anchovy Pineapple Deluxe',
  sayName: function() {
    console.log('This is the ' + this.name + ' pizza!')
  }
}

pizza.sayName();
// This is the Bacon Anchovy Pineapple Deluxe pizza!
```
&nbsp;

[Read more about `this` in objects on MDN.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#as_an_object_method)

[Read more about Objects on the MDN documentation.](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)