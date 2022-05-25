# Arrays

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)

Objects and Arrays are data structures that come built into JavaScript and can be immensely useful for organizing data. Instead of defining a separate variable for every piece of data, objects and arrays allow us to group data together in meaningful ways.

Arrays are similar to objects in that they allow us to group data, except they do not use `keys` to track data. Think of Arrays as lists of information, and of keeping track of items on the list using a number (the index) instead.

An array can be created with `[]`:

```js
var favFoods = [];
```
&nbsp;

And populated with items on creation with commas (`,`):

```js
var favFoods = [
  'pizza',
  'more pizza',
  'chips (not crisps)',
  'soda (not pop)'
];
```
&nbsp;

As before with objects, different data types can coexist within an array. We can also use the `.length` property to determine the length of an array:

```js
var randomJunk = [
  'stale pizza',
  15,
  false,
  {uselessObject: true},
  null
]
console.log(randomJunk.length) // 5
```
&nbsp;

To access array items, use `[]` combined with the index number, which starts at 0. The last item in the array can be accessed without knowing the index with length - 1:

```js
var favFoods = [
  'pizza',
  'more pizza',
  'chips (not crisps)',
  'soda (not pop)'
];

console.log(favFoods[0]); // pizza
console.log(favFoods[2]); // chips (not crisps)
console.log(favFoods[favFoods.length - 1]) // soda (not pop)
```
&nbsp;

To add an item to the end of an array, use the `.push()` method:

```js
var showsToWatch = [
  'survivor season 9',
  'jersey shore reunion',
];

showsToWatch.push('little house on the prairie');
console.log(showsToWatch)
// ["survivor season 9", "jersey shore reunion", "little house on the prairie"]
```
&nbsp;

There are many more useful array methods available. [You can find a list on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).