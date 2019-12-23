---
title: Downtime

date: 2018-12-28T15:18:13+0200

description: 'An introduction to the Node SDK you can use to integrate Oh Dear! into your own software.'

tags:
  - https
  - ssl
  - tls
  - certificate
  - mixed content
  - monitoring
  - alerting
  - javascript sdk
---

# {{$page.title}}

<Info/>

## Getting downtime

Here's how to get the downtime for a given site.

```js
let downtimes = await ohDearInstance.SiteInfo.site(siteId).downtime(start, end, split)

//alternatively you could do this
let downtimes = await ohDearInstance.Uptime.downtime(siteId, start, end)
```

#### Arguments

| Parameter        | Type                              | Description                                                                                       |
| :--------------- | :-------------------------------- | :------------------------------------------------------------------------------------------------ |
| **start** &nbsp; | <span class="red">required</span> | A date in the form of YmdHis that determines the start of the range you want to get downtime for. |
| **end** &nbsp;   | <span class="red">required</span> | A date in the form of YmdHis that determines the start of the range you want to get downtime for. |

Both methods above will return an array of [Downtime](../guide/classes/downtime.md) instances. A Downtime instance.

```js
// The date time when we started detecting downtime
downtime.startedAt

// The date time when we detected the site was back up
downtime.endedAt
```

<HelpBlock/>
