---
layout: essay
type: essay
title: "A Call for Consistent Code"
# All dates must be YYYY-MM-DD format!
date: 2024-02-08
published: true
labels:
  - ESLint
  - Code Design
---

<img width="100px" src="../img/eslint.jpg">

## Structureless Code: The Bad Handwriting of the Tech World 
Just as chicken scratch is hard to decipher, so is poorly structured code. Inconsistent code can cause a lot of problems in software development, such as reduced readability, increased debugging time, and maintenance challenges.

Simply put, structureless code is illegible. Haphazard indentation is hard to follow, and code written without newline characters is as hard to read as sentenceswrittenwithoutspacesbetweenthewords. With structureless code, it is hard to follow the flow of conditional statements, loops, and functions. This makes it difficult to trace code for debugging purposes. It also makes it difficult to collaborate with others. Structureless code is also like bad handwriting in that it serves no purpose if it is not readable by others. If only the author can decipher its meaning, then peer coding and/or review is that much more difficult. This is also why effectively commenting one's own code is important.

## Setting Clear Standards
This is where coding standards come in. These standards require developers to write their code in a certain agreed-upon format. This serves multiple purposes. For one, this makes code more readable and interpretable. Because the format is expected by both the original author and others, there is no additional hiccup when it comes to testing, debugging, or adding contributions. Furthermore, standardized code allows others to produce code in the same style, and it helps them to build off of existing code. Consistently formatted code makes it easier for multiple programmers to work on the same project, as everyone can understand each other's contributions and intentions.

## Experimenting with ESLint
This week, I worked with ESLint in IntelliJ for the first time. It was a new experience to me, and one that took some getting used to. In my own programs previously, I sought to make my code look like that of other programmers. I followed certain conventions related to spacing and indentation. I had also worked in languages like Python where proper indentation is sensitive and mandatory. However, this was my first time using a tool specifically designed for structuring my code. I found the experience to be interesting. I appreciate having regularity in my code design. However, there were some habits that I had (such as using double quotes for strings instead of single quotes) that were hard to break – and until I did, my screen was wrought with red squiggly lines. However, there is also the unique satisfaction of seeing that last warning disappear as it is replaced with a green checkmark.
