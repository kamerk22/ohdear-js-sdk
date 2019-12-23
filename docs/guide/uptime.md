---
title: Uptime

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

## Getting uptime

You can get uptime with the **`uptime()`** method on a site. The method expects three parameters:

```js
let uptimes = await ohDearInstance.SiteInfo.site(siteId).uptime(start, end, split)

// Alternatively you could do this
let uptimes = await ohDearInstance.Uptime.uptime(siteId, start, end, split)
```

#### Arguments

| Parameter        | Type                              | Description                                                                                                   |
| :--------------- | :-------------------------------- | :------------------------------------------------------------------------------------------------------------ |
| **start** &nbsp; | <span class="red">required</span> | A date in the form of YmdHis that determines the start of the range you want to get uptime for.               |
| **end** &nbsp;   | <span class="red">required</span> | A date in the form of YmdHis that determines the start of the range you want to get uptime for.               |
| **split** &nbsp; | <span class="red">required</span> | A string that determines how fine grained the answer periods should be. Valid values are hour, day and month. |

Both methods above will return an array of [Uptime](../guide/classes/uptime.md) instances. A Uptime instance.

```js
// The start of the period
uptime.datetime

// A float representing the percentage of time the site was up
uptime.uptimePercentage
```

<HelpBlock/>
