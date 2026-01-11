---
layout: post
title: "Architecting and Rearchitecting"
date: 2025-12-28
preview: "Retrospection on running realtime IoT system"
---

I want this to be a continuing series on lessons I've got from being part of building realtime serverless system with over 1 million transactions per day in aws.

## Part 1

Back in 2022, We had an untamed, all hands on deck MVP rush for our offshoring startup product in the remote healthcare space. We were trying not just to get the MVP running but have the features promised delivered in succession. Although coding standards took a back seat under the CTO supervision, somewhere along the way we kind of hit a balance between the standards and architecture pile up to not mess with it much. I learnt lots of lessons in Serverless and Distributed computing.

We might have had a lots of technical debt chasing us down the road, but in retrospective, the solutions and alternatives were always there without breaking changes in the architecture. We cannot be proud of how some parts of ours evolved, e.g piling up logical paths on the lambdas, but We found ways to think about how to solve them short term and long term.

### Technically right decisions

How much do we do separation of concern in lambdas? hmm, Imagine we have multiple pathways with a similar logical base, do we go for lambda for each path so as to maintain logical/availability isolation (so it runs independent of any other lambda crashes) or do we do a processor lambda and call others as functions?. 

 I've been part of offshore development team in many early stage startups, and constrained development is all I know. In these architectural choices, I have understood is there is no right answer. If we imagine the right answer as a box, each side is a dimension on cost, time, short/long term solution, Operating domain, available tools, developer capacity, Startup priorities and Compliances. As you can see, dimensions ranges from technical to business complexities and the box will never be perfect, it will always be deformed in various degrees as the product evolves through the stages. 

In the lambda processor situation above, having a processor lambda and making it all as different functions will a right solution if the logical pathways are having small execution time and we dont need isolation, i.e, Even if we dont need isolation on the functions, if there are three pathways each costs 1 second, we may be holding the lambda for 3 seconds untill all of them completes, but can we bloat it with 30 different pathways, just because they share the same logical base?, it will exceed the API gateway time. So that particular logic will be a right answer in a MVP stage, but later, it cannot be sustained. 

Our business logic involves a lots of alarms, You can imagine it, as it is a healthcare space and More importantly since we are in a realtime healthcare monitoring, Alarms are of an high priority thing and the endpoint is a mobile device. Earlier in our MVP rush, we had alarm push notifications  in the same lambda as the alarm processing. That is, if an alarm qualifies we send the push notifications. Easy to think. We shipped it faster, got through the initial market validations and customer aquisitions. 

But as the time went on, we had many different types of alarms, we needed those alarms into history, into some charts etc, the alarm processing got bigger and bigger. All we could think of as a short term solutions were piling up on these already fattening lambdas. While we were pondering on the implications and how to go about sustaining our system, our CTO informed us of a sales break (Product sales would be the focus), where our development would focus on technical debt.

We dived right into a rearchitecture mission. From a very sequence action oriented (Alarm -> Processing -> Push notification -> Data processing), We pivoted to event driven architecture where we had an event table at the center. Now, any alarm creates an event and downstream lambdas tied on queues and streams take it over - Push notification lambdas does their business, Statistics lambda does their business. It doesnt matter any other lambdas fail, alarms now reach safely to the customers (which is a concern in healthcare domain). This particular rearechitecture has been resilient for long term now and gave us breathing space to new features extending off of it easily.

I always think about it, isn't piling up on the lambdas in the first place right decision? Given where our product was, it had been the right decision. But technically it was far from it. Technically right decisions aren't always the right decisions for the products in this space. There should always be a balance between technically right decisions and right decisions for the product.

We had the foresight to rearchitect before the system lost its ways, a point of no return (where the cost of rearchitecture is more than startup can handle). That foresight is what I think an skill we need to master in the distributed computing space, to have the architecture run in our heads, know where the bottlenecks are, have the measurements simulated to know where the next deal breaker is going to be. It's a skill to architecture and rearchitecture. 
