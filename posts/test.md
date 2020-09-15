---
title: "feature test"
date: "2020-09-15"
tags: "css html"
---

# title H1

## Table of contents

## subtitle H2

### subtitle H3

Paragraph: lorem ipsum dolor sit amet  
Line break

Another paragraph

### Another H3

## Code examples

```js
function init(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
             ` class="${cls}"`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }

  return (
    <div>
      <web-component>{block}</web-component>
    </div>
  )
}

export  $initHighlight;
```

```css
@font-face {
  font-family: Chunkfive;
  src: url("Chunkfive.otf");
}

body,
.usertext {
  color: #f0f0f0;
  background: #600;
  font-family: Chunkfive, sans;
  --heading-1: 30px/32px Helvetica, sans-serif;
}

@import url(print.css);
@media print {
  a[href^="http"]::after {
    content: attr(href);
  }
}
```

## link examples

Visit internal [about me](/about) page

Visit external [revo.js](https://revojs.ro) page

## images examples

<figure>
  <img src="https://www.w3schools.com/tags/pic_trulli.jpg" alt="Trulli">
  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure>
