---
title: 'Javascript String Methods: Re-implementing trim'
date: '2019-07-07'
---

The `trim` method removes trailing whitespace from both ends of a given string.
In this post, we’ll be building out our own version of `trim` that will function
effectively like the me...
---

The `trim` method removes trailing whitespace from both ends of a given string.
In this post, we’ll be building out our own version of `trim` that will function
effectively like the method provided by the language.

## Why do this though?

Because it’s fun to learn how things work! (cross my heart) Also, it’s a cool
little problem solving exercise to help build up our problem solving chops.
Now that I’ve convinced you that this is a worthwhile use of your time, we can
get started with the implementation.

## Implementing trim

The logic for `trim` is pretty easy to reason about, what we want to do is build
a new string by iterating over a given string. During this iteration, we will be
adding the characters that are non-whitespace characters from the given string
to the new string when we encounter the first non-whitespace character. We just
need to do this on both ends of the string to ensure that all trailing
whitespace characters are not added to the new string.

With that having been said, we’ll need to implement two helper functions that
will make our implementation of `trim` easier. The functions we’ll be
implementing will be called `trimLeft` and `trimRight` and they’ll function
(no pun intended, I swear) just as their names imply; `trimLeft` will build a
new string with trailing whitespace characters removed at the start of a given
string and `trimRight` will do the same thing but for whitespace characters
after the last character in a given string.

Doing this will simply make `trim` a combination (or is it a composition?) of
these two helpers.

Let’s start with the `trimLeft` function:

```js
const trimLeft = str => {
  /*
   The res variable is initialized to an empty string.
   This is the new string that we'll be returning.

   The shouldMergeChar boolean variable will be used to indicate
   when we can start building our new string.
 */
  let res = "";
  let shouldMergeChar = false;

  /* Just a humble for loop */
  for (let i = 0; i < str.length; i += 1) {
    // store a reference to the current character in the string
    let char = str[i];

    /*
     The regex here checks to see if the current character
     is NOT a whitespace character.

     If that is the case, it sets the boolean variable
     shouldMergeChar to true
   */
    if (char.match(/[^\s]/)) shouldMergeChar = true;

    /*
     Once the first non-whitespace character has been
     encountered, we can proceed with building our new
     string using the characters from the given string
   */
    if (shouldMergeChar) res += char;
  }

  /* This does what you think it shoud do */
  return res;
};

trimLeft("         hello world       "); // "hello world       "
```

The function simply iterates over a given string and starts building a new
string once it finds the first non-whitespace character.

The logic for `trimRight` will follow a similar pattern with the only difference
being that the iteration will start at the end of the
given string and the new string will be built by adding characters to the
beginning of the string rather than at the end.

Here’s `trimRight`:

```js
const trimRight = str => {
  /*
   Same basic logic for the variables here just like in trimLeft
 */
  let res = "";
  let shouldMergeChar = false;

  /*
    Our humble for loop again but this time iterating
    from the end of the string
  */
  for (let i = str.length - 1; i >= 0; i -= 1) {
    /* store a reference to the current character in the string */
    let char = str[i];

    /*
     If the current character is NOT a whitespace character,
     we can proceed with building out the new string
   */
    if (char.match(/[^\s]/)) shouldMergeChar = true;

    /*
     Since we are looping from the back, we need a way
     to still build the new string in the correct order.

     This does just that by adding the characters to the
     beginning of our new string rather than at the end.
   */
    if (shouldMergeChar) res = char + res;
  }

  /* It still does what you think it should do */
  return res;
};

trimRight("       hello world       "); // "       hello world"
```

Now that we have both our helper functions to remove trailing whitespace
characters from the beginning of a string and the end of a string, we can
proceed with implementing our `trim` function which will simply just call out
the helper functions:

```js
const trim = str => trimRight(trimLeft(str));

trim("       hello world       "); // "hello world"
```

What did I tell you? It’s that easy!

## Conclusion

There are probably a dozen different ways to go about implementing `trim`
but the concepts discussed in this article gives a very good frame of
reference for how the trim method operates on a string.