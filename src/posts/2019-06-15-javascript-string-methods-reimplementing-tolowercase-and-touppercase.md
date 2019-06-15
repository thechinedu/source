# Javascript String Methods: Re-implementing toLowerCase and toUpperCase 💪🏾

The `toLowerCase` and `toUpperCase` methods in JavaScript are string methods that
transform a given string, making all of it's characters either lowercase or
uppercase depending on the method called.  In this post, I'll be discussing how
to implement the functionality of these two methods without directly using the
methods as provided by the language. Let's get started!

Every string character can be represented as a unique integer between `0` and `65535`.
For any particular string character, the integer that maps to the character
represents the UTF-16 encoding for that character. JavaScript provides an easy
way to get the character code for any string character through the charCodeAt
method. charCodeAt takes a single argument representing the index for which we
want a character code returned. That is all fine and dandy but how do we get a
character from the integer representation? Javascript has got us covered through
the static `String.fromCharCode` method; `String.fromCharCode` takes a list of
character codes and spits out the relevant string representation for the given
character codes.

We now have all we need to proceed with re-implementing the `toLowerCase` and
`toUpperCase` methods. Our focus is on converting between the cases for the
letters of the English alphabet.

In order to convert from one case of a letter in the English alphabet to another,
what we need to do is either add or subtract 32 to the character code depending
on the functionality we want. The reason we use 32 is not because adding 10 to
it will yield the answer to the meaning of life, no, the reason we use 32 is
because the absolute difference between the character codes for a letter in both
cases is 32. A little explanation -- the character codes for lower case letters
in the English alphabet is a range of integers between 97 and 122 and for
uppercase letters, the range is between 65 and 90. If we take an integer at the
same index from both ranges and find the absolute difference, we will get 32.
Go ahead, try it!

With all of that out of the way, let's see some code shall we?

```js
const convertCase = (str, charCase = "lowercase") => {
  if (charCase !== "lowercase" || charCase !== "uppercase") charCase = "lowercase";

  let res = "";
  let actions = {
    lowercase: char => {
      const res = String.fromCharCode(char.charCodeAt() + 32);
      return char.match(/[A-Z]/) ? res : char;
    },
    uppercase: char => {
      const res = String.fromCharCode(char.charCodeAt() - 32);
      char.match(/[a-z]/) ? res : char;
    }
  };

  for (let i = 0; i < str.length; i += 1) {
    let char = str[i];
    res += actions[charCase](char);
  }

  return res;
}


const toLowerCase = str => convertCase(str, "lowercase");
const toUpperCase = str => convertCase(str, "uppercase");

console.log(toLowerCase("HELLO WORLD")); // hello world
console.log(toUpperCase("hello world")); // HELLO WORLD
```

Our `toLowerCase` function and `toUpperCase` function both call the `convertCase`
function passing in the relevant arguments.

Let's walk through the `convertCase` function. The function takes two arguments,
the first is the string whose case we want converted and the second argument
is a string representing which case we want to convert to. At the very top of
the function, we add a guard clause to ensure the second argument is a valid
value as defined by us.

We follow that up with a variable declaration to store the result of our case
conversions, nothing too fancy. The actions object stores two functions that
will be called depending on the value passed to the second argument - this will
default to lowercase if no argument is passed or an invalid value is provided.
The lowercase method in the actions object checks using a regular expression
to see if a character is in uppercase and if it is, it converts it to
lowercase -- the uppercase function does the inverse.

We iterate through the characters in the provided string, calling the relevant
function in the actions object and appending the value to the result variable.

Finally, we return the result with the cases converted!
