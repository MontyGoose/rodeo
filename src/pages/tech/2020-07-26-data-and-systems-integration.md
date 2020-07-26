---
templateKey: blog-post
title: Data and Systems Integration
date: 2020-01-14T09:46:10.617Z
description: >-
  How is the changing architectural landscape shaping how we should look at data
  and systems integration? How we shape the connectivity between legacy systems
  and newer applications and devices, where data can securely flow across the
  business and boundaries and be reused to speed up development time is becoming
  more and more prevalent.
featuredpost: false
featuredimage: /img/henry-co-CdE0f0zWIxM-unsplash.jpg
tags:
  - architecture
  - data
  - systems
---
## TL;DR


As we move to a more hybrid landscape with services distributed outside of our "walls", our integration solutions, and also our thinking needs to evolve and grow to respond and work in this new environment.

We can no longer assume that all systems can "see" each other, and must look provide ways on ensuring that data is available to systems at the right time and in the right way - we can't just rely on single points and solutions but should be bold in thinking how we distribute data and hence empower systems and applications to behave and work as self-contained products

## Chang~~ing~~ed Landscape

Its a fact that today IT boundaries and ownership extend beyond our walls - IT assets are becoming more dispersed and this trend will only extend further, as we truly look to embrace "cloud" as any part of an IT strategy.

![](/img/int1.png)

Within our landscape we have **operational core systems**, these are typically slow moving - they are our book / system of record. In a financial organisation we can name some - Accounting, OMS, Risk, Performance, Securities etc.We can start to think of these as ‘Products’ and while they may technically have many parts we can braw boundaries around them as single entities - with clearly defined owners- both technical and business. Already within this landscape we have on-premises,
SaaS solutions and cloud solutions within these business aligned products - with more to follow.

There also rich **enterprise reporting functions**, some of which fi neatly within products, but we seem more recent requests for reporting that spans across domains and products.

Additionally, we have **new product** areas, dashboards, which consume data from many domains, external data sources and also intra-day data.

And finally (for now at least), we're seeing trends into **ML and AI**, which would ideally be supported by some level of data lake (perhaps) - which of course (?) would be a prime candidate for cloud.

There are many discussion points and topics in the above few sentences I’m sure, but the point is that the landscape that historically IT relied upon is getting more and more hybrid, and while data stores, bases, warehouses, hubs, and lakes will and can be hotly debated (:-)) our data integration must start living up the challenge of a distributed, hybrid landscape.

Therefore any data integration capabilities must fundamentally be able to address connectivity across these boundaries, while also simplifying security and management issues that will be inevitable with embracing a hybrid architecture.

At a high level a broad integration framework / tools must seamlessly bridge all our environments, whether direct data sources, applications, or APIs, and can connect to them wherever they might be: on-premises, SaaS or Cloud.

We can no longer solely rely on coalescing all our data into centralised data stores / warehouses and having cross applications consume directly at the data tier (from 2004 Martin Fowler on [Integration databases](https://martinfowler.com/bliki/IntegrationDatabase.html) ) - we need to think much more distributed, about data domains and separation of concerns.

Nor can integration be ‘point to point’ (and please ***not*** at the database layer!!) as I am sure [Obi Wan said](https://www.youtube.com/watch?v=532j-186xEQ) ... "These aren't the ~~droids~~ architectures you are looking for ...."

![](/img/int2.png)



We should be aiming for this as a better solution.

![](/img/int3.png)

Viewing this in a little more details and looking at it as an architectural layer, we have our core system at the bottom - slow moving, operational systems, an integration layer - which here is split into components - low-level connectivity into systems, tooling to allow APIs, events, data synch/translation and then exposing - through APIs, messages or streams, to our more fast past moving applications.



![](/img/int4.png)

However, ANY part of our architecture can be on-premises or fully cloud-based. The components near the bottom of the above diagram, such as systems of record, are more likely to be on-premises, but like Eagle could be SaaS. Similarly, components near the top of the diagram are more likely to move to be cloud-based, (like CRMs, Web, Client Access etc) but plenty of applications are still likely to be hosted internally. The reality is that a blend of on-premises and off-premises components,
and any hybrid integration architecture must enable connectivity regardless.

The trend and technical direction we are seeing and also looking to adopt is to publish data from systems (Golden Source) in a governed, managed and curated manner with (business, security, governance
and quality) rules applied onto/into queue/stream which can the be consumed by other systems (Golden Copy) -be they core systems, consumers, data
lakes etc, and also the need for speedier grab-n-go data requests.

So what does go into the ‘integration layer box’ then?

Technically I see two main aspects - we will need architecture that is used to integrate various systems of record, for stable, well-understood business processes (here we discuss Queues, ESBs, Kafka) and something to connect the fast pace of digital stuff with the more stable system of records (here, APIs, REST, GraphQL etc). This page isn’t going to discuss that here, but both are needed in a more modern stack.

Perhaps a glimpse of the future would help... or at least a way to view how far we can take this

![](/img/int5.png)

The diagrams above will serve us well as we start on this journey and food for thought as we grow and evolve

<https://developer.ibm.com/articles/mw-1606-clark-trs/> <https://www.ibm.com/developerworks/websphere/library/techarticles/1503_clark/1305_clark.html> <http://datanome.co.uk/tag/enterprise-information-architecture/>
<https://www.cbronline.com/opinion/tech-predictions-2019>
