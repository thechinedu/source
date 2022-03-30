---
title: 'Javascript Array Methods: Re-implementing Slice'
date: '2020-03-08'
---

The slice method in JavaScript is a useful utility method, when it is called on an
array, it will return a shallow copy of a part of that array...
---

The `slice` method in JavaScript is a useful utility method, when it is called on an
array, it will return a shallow copy of a part of that array. It expects two
arguments that represent indexes of the array, the first one is used to indicate
where to begin shaving off portions of the array, and the second one is used
to indicate where to stop (non inclusive). Slice does not modify the original
array.

With that all out of the way, let’s get started!

## (Re)Implementing Slice

In order to implement slice, we need to create an empty array, iterate over the values in the original array and copy the values that are within the begin and end indexes to our initially empty array. That’s all there is to it really.

Here’s our slice reimplementation in all its’ glory:

```js
const slice = (
  arr,
  start,
  stop = arr.length /* Default value for stop if not present */
) => {
  let res = [];

  /* 
    Oh yes, the slice method accepts negative indexes as well and we have to
    take care of that in our reimplementation function.

    The ternary condition in the following expressions is to take care of
    converting negative indexes to positive indexes. When the full length of the
    array is added to the negative index, it sums up to the equivalent positive
    index.
  */

  let currentIndex = start < 0 ? arr.length + start : start;
  let stopIndex = stop < 0 ? arr.length + stop : stop;

  /* A humble while loop that iterates from the start index to the stop index */
  while (currentIndex < stopIndex) {
    res.push(arr[currentIndex]);
    currentIndex += 1;
  }

  return res;
};
```

The function starts iterating from the given start index all the way to the stop
index and simply populates the empty array with values from the original array
that fall within the start and stop range.

## Conclusion

Sometimes, the best way to learn how something works is to build your own version;
this gives you a clearer perspective and better understanding of how to piece
things together from scratch and greater clarity into how things work.