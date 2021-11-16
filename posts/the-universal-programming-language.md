---
title: 'The Universal Programming Language'
date: '2020-05-02T23:45:15'
author: mr
draft: false
tags:
  - preposterous
---
There are hundreds of programming languages and most of them are good for
something. Knowing which language is best for your application requires
knowing many languages well.

  

However there is a subset of features shared by almost every programming
language, and while each language may have unique features which make it
superior for a particular application, almost every imaginable application can
be realized using only this shared subset of all languages. I call this **The
Universal Programming Language** or **TUPL** .

  

What are the components of TUPL?

  

**Variables**

Variables are used to store the data that is manipulated by the program. TUPL
variables can store any values, and have no practical limits on how much data
they can store.

  

The values of variables can be set, erased and compared to other variables.

  

Variables can be “indexed” which is to say that specific parts of the value
stored in a variable can be accessed by specifying the position of the data.

  

**Conditionals**

TUPL code normally runs in the order it is written, but there are are two
statements that can change this flow: if and while. The if statement compares
two variables and based on the result of the comparison chooses one of two
paths through the code.

  

**Loops**

A block of TUPL code can be run repeatedly using a loop. A loop can repeat a
fixed number of times, or it can be “broken” conditionally by testing the
value of a variable.

  

**Functions**

Functions are simply collections of TUPL code that can be called by name.
Functions can only operate on variables declared within the function, or
variables passed by the code calling the function. When a function is
complete, the program resumes where it left off when the function was called.

  

Functions always return a value, and that value can optionally be stored in a
variable. If the programmer doesn’t specify what to include in this variable
when writing the function, it is empty, unless an error occurs in the
function. If this happens the error is included in the variable.

  

All code in TUPL runs inside a function. When a TUPL program is run, the
function “main” is called. The code in the main function either finishes it’s
job and returns, exiting the program or it calls additional functions which in
turn run their code and return to main.

  

**A basic example**

  

main{

message = “Hello, world!”

return message

}

  

**A more complex example**

  

count word{

letters = 0

while word[letters]{

letters plus 1

}

return letters

}

  

main{

name = “Jason”

namelength = count name

return namelength

}

  

  

**Implementations**

Everything about TUPL described so far can be implemented in every programming
language that I’m familiar with. This includes Python, JavaScript, C (and
kin), Rust, Lua, BASIC and probably even most assembly languages (although I’d
have to think about that a little more to be sure). At the moment there is no
“automatic” compiler for TUPL that converts the code to these languages or
compiles TUPL code into runnable programs.

  

**Isn’t TUPL just pseudocode?**

I suppose that at the moment it is, at least until I provide some kind of
implementation (which I intend to do). But the _purpose_ of TUPL is much
different than that of [ pseudocode
](https://en.m.wikipedia.org/wiki/Pseudocode) as well.

  

The purpose of TUPL is to provide a universal foundation for writing programs
that can be implemented and run on any computer. Programs written in TUPL are
completely portable, making TUPL an ideal tool for writing software when it is
unknown where the software will be run. Furthermore, almost any specialized
language will provide features that can be used to improve the quality of any
TUPL program, so you can choose a language which provides the most important
advantages for your application. A TUPL program will work anywhere, and can
always be improved through specialization if _necessary_ , **after** the
program is in use and the most important areas of improvement can be
identified _objectively_ .

  

I’ve used something like TUPL in almost all of the programming I’ve done, and
it’s what’s made it possible for me to program in so many different languages
(sometimes in more than one at a time). It’s is something I plan to expand on
in one of the books I’ve been writing, and as I experiment with it more I’ll
formalize it enough that I can create some sort of compiler (ideally something
that can emit source code in an array of languages as well as executables).

  

