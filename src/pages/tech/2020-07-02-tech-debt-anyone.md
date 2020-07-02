---
templateKey: blog-post
title: Tech debt anyone?
date: 2019-09-20T18:41:16.131Z
description: What is tech debt?  Why is it important?  And should you even care?
featuredpost: false
featuredimage: /img/markus-spiske-5gGcn2PRrtc-unsplash.jpg
tags:
  - tech debt
---
I’m sure you all know that this is Ward Cunningham. (Co-author of Agile Manifesto, first wiki creator etc etc)

![](/img/230px-Ward_Cunningham_-_Commons-1.jpg)

Anyway - he once (circa 1990) said "that some problems with code are like financial debt. It's OK to borrow against the future, as long as you pay it off.”

So what does that mean?

Ok - so first, it’s just a metaphor.

Let’s use a quick example - say, we’re wanting to implement a new database table for some thing.

**Option 1** - would be to write some 'create table' SQL and run it against the database(s). AKA doing things the quick and dirty way.

**Option 2** - would be to do a design, write LiquiBase scripts, add some tests (I know crazy right) and store scripts/tests in source control and promote the change though build and release pipelines. Takes way longer. Yawn.

Option 1 sets us up with technical debt, which is similar to a financial debt. Like a financial debt, the technical debt incurs interest payments, which come in the form of the extra effort that we have to do in future development because of the quick and dirty design choice - updating the table is now very hard and time consuming, dependencies can’t be managed, who else can make the changes now … etc . We can choose to continue paying the interest (take the hit), or we can pay down the whole debt by refactoring the quick and dirty design into the better design. Although it costs to pay off the debt, we immediately gain by reduced interest payments in the future.

The main issues IMO, are that either we don’t know we’ve got technical debt, and/or that we’ve let our debt get so out of control, that we now spend huge parts of our development time and effort paying off crippling interest payments / working around issues / building yet another xyz as we don’t trust/understand the one that exists / duplicating business logic … etc

So is Technical Debt bad?

Not necessarily, taking short cuts in order to put earlier a viable product out which delivers business value is generally not a bad decision. But we MUST accept that the Technical Debt incurred will hurt sooner or later. At some time, the team should pay back at least a part of the accumulated Technical Debt. There are different ways to do that, and there is no magic that fits all situations. In order to fully understand the situation and establish the relevant strategy, the Technical Debt should be made fully transparent and analyzed - continually.

The problem with technical debt is, that unlike money, it's super hard to measure effectively, technical debt impacts a team's productivity, but as productivity can’t be measured (and hence impact on productivity is impossible to quantify) we can't really see the true effect of our technical debt.

However, we do know that the biggest ***cost*** of technical debt is that it ***slows a team's ability to deliver future features*** - so we can measure in some manner the lost opportunities and lack of cadence in our team.

So what can we do?

**Agree**

So, we all need to agree that the debt metaphor is helpful about thinking about how to deal with business decisions and design problems, and how to communicate that thinking. I pesonally see that a particular benefit of the debt metaphor is that it's very handy for communicating to non-technical people - especially people in finance - which is handy for us !🙂

**Acknowledge**

We need to be clear and honest about technical debt, that we have it - and that we want to do something about it.

I for one think it’s a very useful metaphor as it constantly reminds us about the choices, we can think about technical debt it two camps ;

**Prudent debt**- the stuff we do knowing it's not the best - e.g to reach a release - maybe acceptable if the impact is sufficiently small - such as if it were in a rarely touched part of the code-base - however,

**Reckless debt -**the type where we blatantly ignore best practice/design ~~rarely~~, never is!

Another tech god/leader/hero Martin Fowler (you will see I reference him a lot) goes further, and suggests another distinction that of deliberate and inadvertent debt.

His grid below is a great summary - where does your last design/delivery decision lie?

![](/img/techDebtQuadrant.png)

**Communicate**

All technical debt creates a risk for the business. While It is important to remind the business that technical debt isn’t necessarily an evil thing, we shouldn’t hide technical debt from our stakeholders, thinking that it could be seen as a failure.

We must socialise the concept of technical debt with out stakeholders and ourselves!!

**Remediation**

As the above grid shows, we know that technical debt is used as a a catch-all term that can describe both planned/identified impact as part of a decision-making process ***and*** the unplanned effect of developing software without a clear roadmap and solid architecture.

We need to make ***informed*** decisions on not only when we create but also fixing technical debt, and need to take the time to ensure that our stakeholders understands what technical debt is, including all the benefits and consequences, and how it can be managed best.

This way, we can all develop a strategy to reduce the risk technical debt can present - both in it’s creation and remediation.



Some links:

**<https://martinfowler.com/bliki/TechnicalDebt.html>**

**<https://en.wikipedia.org/wiki/Technical_debt>**

**<https://gauravtiwari.org/technical-debts-basics/>**

**<https://en.wikipedia.org/wiki/Ward_Cunningham>**
