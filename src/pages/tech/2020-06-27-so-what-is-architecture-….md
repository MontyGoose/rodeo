---
templateKey: blog-post
title: So what is architecture …
date: 2019-07-10T15:03:41.215Z
description: >-
  "If all you're interested in is cranking out code to hit release 1 then you
  probably don't need to think about architecture"
featuredpost: false
featuredimage: /img/home.jpg
tags:
  - archirectire
  - non-functionals
---
Good place to start with a statement from Chris Richardson - <http://www.chrisrichardson.net/>

Sounds fair enough to me; head down, hit the deadline, code does what it says - tick.  Shortest bloh ever ....

But perhaps we're missing something, or if we're being honest a **LOT** of things. 

Let's twist Chris' statement above - if you're working on some code/system/report, and it's too hard to deploy, or too slow, or fragile (i.e. one wrong move and the whole deck of cards will fall!), or has bottlenecks in the process  - then chances are not enough time, and by that we mean no time has been spent thinking about architecture.  

Of course, **we've** never worked on or written code like this :-) but if we think about the above, it's clear that to deliver better quality, performant, resilient, and working code - we need to think about more than just classes or dlls! 

When we discuss and define the requirements of what we're looking to build; we can always split them into 2 distinct areas: Functional  + Non-Functional

We know all this of course - functional requirements are our bread and butter - it's the how, it's behaviour, it's technical, it's code - like moths to flames we're drawn to these ….
The non-functional - well, hmm, they're a bit more fluffy, intangible, non-specific, hard to codify?  Right?
Perhaps but if functional requirements are about domain knowledge and design, then non-function requirements are all about architecture.

Look at the list on wikipedia - <https://en.wikipedia.org/wiki/Non-functional_requirement> - non-functional requirements are all the "-ilities" - it's what makes our code/software great!

You can write the most smoking, amazing, succinct code - but without non-functional requirements, how will you know how great it is, how will you know how performant it is, secure, readable, quality … etc  

It should, therefore, stand to reason, I'd suggest, that we should spend a lot more time thinking about the non-functional requirements of our products and components, how to measure, report and ultimately know that what we're delivering not only satisfies a function - but does it well.

As a wise person once told me "What's the last thing a good coder does? … … … code"
