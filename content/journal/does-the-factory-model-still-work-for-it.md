---
title: Does the Factory Model Still Work for IT?
excerpt: AI made individual developers faster — so why does your organization
  feel exactly as slow as before?
category: AI
date: May 25, 2026
---
Spend time on a delivery floor right now and you’ll see something strange. Developers are shipping faster than they ever have. AI pulls the context of an aging codebase on demand, flags the downstream impact of a change, helps write the tests, runs them. Reviews are glowing. People look, justifiably, like they’re at the top of their game.

And most of them have no idea that the thing they’re excelling at — fast, accurate execution inside a narrow technical lane — is precisely the thing quietly becoming a commodity. Every signal in the day says *you’re winning*. None of them are wired to say *the game is changing underneath you.*

This is a warning about that gap, and I’m writing it from inside, not from above — because for most of the last decade, I was the specialist in that story.

## A question worth holding open

For thirty years, software delivery has run on a model borrowed from the factory floor: break the work into specialized stations, staff each with an interchangeable specialist — frontend, backend, data, QA — define the handoffs, manage the line.

It’s easy to sneer at this now. Don’t. The factory model won because it solved real problems: it coordinated huge amounts of work, made quality predictable, made people replaceable in the healthy sense. When building software was genuinely hard and expensive, slicing it into narrow, masterable pieces was the rational answer.

So the honest question isn’t “was the factory model stupid?” It wasn’t. It’s sharper: **does it still work when the thing it was built to manage — the cost of production — has largely collapsed?**

## The local win is real

Let me be unambiguous, because everything that follows depends on it: AI is delivering. The individual gains are not hypothetical. Developers build faster. Codebase context once locked in a few veterans’ heads is retrievable on demand. Engineers see the blast radius of a change earlier. QA runs a volume of tests unreachable before at the same headcount.

And yet we are not seeing the value — not at the level that matters: the release, the team, the business outcome. Individual throughput is up; collective value realization is flat. That contradiction is the whole story, and it took me a while to see it wasn’t a contradiction at all.



## We made one station faster. The line runs at the speed of the line.

Building and testing is only a slice of delivery. Around it sits everything else: the handoff to the admin team, the dependency on another squad whose priorities aren’t yours, the coordination to land one change across three teams, the architectural review, the legal sign-off, the business approval — and the waiting, so much waiting, for someone to be ready to receive what you finished days ago.

AI made the build-and-test station dramatically faster. It did almost nothing to the stations on either side, because those aren’t made of code. They’re made of people, queues, priorities, and permission.

Anyone who’s run a line knows what happens when you speed up one station and leave the rest: nothing. Throughput is set by the slowest constraint, and you didn’t touch it — you just produced work faster so it could wait longer in the next queue. The bottleneck was never the typing. It was the waiting between the boxes.

This is the real explanation behind a statistic that made noise last year: [MIT’s NANDA study](https://mlq.ai/media/quarterly_decks/v0.1_State_of_AI_in_Business_2025_Report.pdf) found that **roughly 95% of enterprise generative-AI pilots delivered no measurable bottom-line impact**, despite tens of billions spent.[1](https://substack.com/home/post/p-199148239#user-content-fn-mit) The reflexive reading was “the AI doesn’t work.” But the report’s own lead author said the opposite — the failure wasn’t model quality, it was the *learning gap*: flawed integration into how organizations actually operate. The tool worked. The line didn’t change. The gains evaporated into the gaps the tool was never going to fill.

## So what’s actually scarce now?

The skill AI commoditized lives *inside* the fast station. Pure execution — turning a well-specified task into clean code — is exactly what the machine now does well, fast, and tirelessly. That doesn’t make it worthless; it makes it abundant. And abundance is the opposite of leverage.

What didn’t get commoditized is the ability to see the whole line: to find the real constraint, to know which dependency can be dissolved and which is load-bearing, to work end-to-end from “what is the business trying to do” to “who and what is in the way.” [Gartner](https://www.gartner.com/en/newsroom/press-releases/2025-10-20-gartner-identifies-the-top-strategic-technology-trends-for-2026) has a name for the role this produces — the *forward-deployed engineer*, embedded close to the business, solving the whole problem rather than the assigned slice.[2](https://substack.com/home/post/p-199148239#user-content-fn-gartner) That’s the upskilling direction. Not deeper into one framework. Wider, across the whole flow.

## 
Why almost no one sees it coming

This is the part I find genuinely unsettling. The shift is nearly invisible to the people it most affects — not because they’re complacent, but because every feedback signal in their working life is a *lagging* one, and every lagging signal still reads green.

What tells a specialist they’re doing well? Stories closed, sprints hit, a good review, a raise. Every one of those is generated by the old system measuring the old definition of value — and AI makes them all look *better than ever*. Why would anyone conclude they’re standing on shifting ground?

That’s the trap. The signal that says “you are valuable” and the signal that says “the definition of valuable is changing” are not the same signal, and they don’t arrive at the same time. The first arrives daily. The second arrives once, late, usually as a shock. There’s no character flaw being diagnosed here — the ground simply moved under a stance that was completely reasonable to hold.

## The warning, plainly

If you’re early in your career, or mid-way through one built on a single deep specialty: don’t spend the next three years going one layer deeper into one framework. That depth is about to be supplied by machines at near-zero cost. Invest instead in becoming the person who can see and solve the whole problem — who understands the outcome, navigates the dependencies between teams, and treats “it’s not my part” as the beginning of the job, not the end.

Stay technical; fluency is what lets you tell a real constraint from an imaginary one. But point it at the whole line, not your station. The specialists who broaden into problem-solvers will be more valuable than ever. The ones who only go deeper will be more replaceable than they imagine — and their reviews will keep saying otherwise right up until they don’t.

## And for the people who run the line

Briefly, because this deserves its own piece: if individual productivity is up and value is flat, resist buying more tooling. You’ve already made one station fast — the gains are trapped in the queues and approvals between stations, and no license will touch them. The work is redesigning the flow. But don’t read “remove dependencies” as “remove gates.” Some friction is accidental coordination overhead and should go; some — legal review, irreversible architecture, real business trade-offs — was built in blood and should stay slow and human. The hard skill of this era isn’t going faster. It’s telling a real gate from an accidental one.

## Back to the floor

The tools are real and they work. The gains are real and they’re local. The structure hasn’t caught up, and the day it does will arrive not as a gradual dawning but as a single, late piece of news.

The gap between the fast station and the slow line is where all of us are standing right now. The comfortable signals lie about how long we get to stand here.

The work, it turns out, was never the work. The work is seeing the whole line.
