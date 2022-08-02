# Building a simple library 
# Lotide - A homage to [Lodash](https://lodash.com)

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by [Sachieko](https://github.com/sachieko) as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sachieko/lotide`

**Require it:**

`const _ = require('@sachieko/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: Returns an object with Letter: Freq key-value pairs from an input string. (ex: "countLetters(hi) => { h: 1, i: 1 } )
* `countOnly(arrayItems, itemstoCount)`: Returns an object with key-value pairs for any items in arrayItems that matched with each key: true in object itemstoCount. Ex: countOnly([1, 1, 1, 0, 1, 1, 0], { 0: true }) // => { 0: 2 }
* `eqArrays(array1, array2)`: Takes in two array parameters and returns a true or falsey value as to whether they are the same array or not.
* `eqObjects(object1, object2)`: Takes in two objects and returns a true or falsey value as to whether they are the same objects (same key:value pairs)
* `findKey(object, function)`: Takes an object and function. Returns any key which produces a true value for the function. Ex: (key) => { key === "order" } will return a key named "order" if it exists in the object but can be more complex.
* `findKeyByValue(object, value)`: Takes an object and a value, returns one key name that has a matching value.
* `flatten(array)`: Will take a nested array and return all values into a one dimensional array in order. Does not currently support a level of flattening - it flattens ENTIRELY.
* `head(array)`: Returns the first element of an array. Array[0].
* `letterPositions(string)`: Takes a string and returns an object containing key value pairs of {} Letter: [Indices in array] }. (Ie: letterPositions("cat"); // =>{ c: [0], a: [1], t: [2] })
* `map(array, function)`: Takes in an array and a function and performs the function on each member of the array before returning the resulting array of altered elements.
* `middle(array)`: Takes in an array with more than 2 elements and returns the middle element as an array. An array of 2 values results from arrays with even numbers.
* `reverse(string)`: Takes in a string and returns that string with all letters reversed. reverse("Socrates"); // => "setarcoS"
* `tail(array)`: Takes in an array and returns that array with the first element removed without mutating the original array.
* `takeUntil(array, value)`: creates an array from the elements in the provided array up to before the provided value. If no such value exists in array, it will return the same array.
* `without(arrayAllItems, arrayItemstoRemove)`: Returns an array of all the elements in arrayAllItems without any of the arrayItemstoRemove elements in it.

Thanks for visiting this library!