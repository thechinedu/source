---
title: 'CSS last of type pseudo class'
date: '2022-04-23'
---

CSS `:last-of-type` pseudo-class doesn’t work when the selector is a class 
(unless the selected element is also the last child of its parent). 
It still doesn’t work even if you disambiguate the class by adding a type selector. This
is because `:last-of-type` only applies to elements and nothing else (classes, ids, attribute selectors, etc).
---