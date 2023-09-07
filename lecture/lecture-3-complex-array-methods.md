---
marp: true
---

# JavaScript FUNdamentals
## Complex Array Methods

---

## Callback functions

- Some array methods need a function as an argument, the argument becomes known as a  **callback function**.
- These are arguably the most flexible and useful methods.
- But they are definitely more complex.
- There are two ways of using callback functions.

---

## Method 1: anonymous callback function

An anonymous callback function is a function with no name that is passed as an argument.

```js
const array = [1, 2, 3, 4, 5];

array.forEach(function(number) {
    console.log(number);
})
```

> PS: Don't worry about what the forEach method is just yet, we'll see it soon.

---

## Method 2: named callback function

An named callback function is a pre-defined function that is passed as an argument.

```js
const array = [1, 2, 3, 4, 5];

function logNumber(number) {
    console.log(number);
}

array.forEach(logNumber);
```

❗ Notice how I did not call the `logNumber` function?
‼ Notice how `logNumber` received a parameter, but was never given an argument?

---

## Method 2: named callback function

- A named callback functions **MUST NOT** be called when passed as an argument.
- It will be automatically called by the method that is using it.
- Named callback functions have a superpower:
    -  They will automatically receive their parameters from the method.

In the example on the last slide, the method only has one argument  to give, so `logNumber` only needs to receive one parameter.

---

## Complex array methods

Complex array methods are different from one to the other.

They also share a lot in common: 

- They all take a callback as their argument.
- They all execute that callback on every element in the array.`*`
- They all go through the length of the array.`*`
- They all return something.`*`
- They are all a much better/faster version of the `for` loop.
- They all return **new values**. Meaning they do not modify the original array.

`*` Almost all... A few exceptions exist.

--- 

## `.forEach()`

- Used for modifying a variable that depends on the contents of the array.

```js
let total = 0;
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    total += number
});

console.log(total);
```

The `.forEach()` method **ALWAYS** returns `undefined`. In other words it **CANNOT** return anything. Ever. No matter what.

---

# Ever!

---

## `.map()`

- Used for making changes on every element in the array.
- Can also be used for making a new array of the same length as the original with new things inside.
- It's return statement can take an operation or a value.

```js
const words = ["The", "large", "shaggy", "dog"];

const allCaps = words.map(function(word) {
    return word.toUpperCase();
});

console.log(allCaps);
```

The `.map()` method always returns an array of **the exact same length as the original**.

---

## `.filter()`

- Used for removing unwanted data from an array.
- It's return statement takes a comparison or a condition.
- Returns only the elements that pass the test.

```js
const words = ["The", "large", "shaggy", "dog"];

const longWords = words.filter(function(word) {
    return word.length > 3;
});

console.log(longWords);
```

The `.filter()` method always returns an array. It cannot modify the elements in the array.

---

## `.every()`

- Used for validating data in an array.
- It's return statement takes a comparison or a condition.
- Returns `true` if all elements pass the test, otherwise returns `false`.

```js
const words = ["The", "large", "shaggy", "dog"];

const allStrings = words.every(function(word) {
    return typeof word === "string";
});

console.log(allStrings);
```

The `.every()` method always returns a boolean. It cannot modify the elements in the array.