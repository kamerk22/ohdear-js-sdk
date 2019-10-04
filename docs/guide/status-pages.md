---
title: Status Page

date: 2018-12-28T15:18:13+0200

description: "An introduction to the Node SDK you can use to integrate Oh Dear! into your own software."

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

## Retrieve all status pages 
The simplest example is one where we list all your status pages that have been configured.

```js
let statusPages = ohDearInstance.statusPage.statusPages()
```

This will return an array of [Status Page](../api/classes/statuspage.md) instances.

The individual attributes will be explained in the next section.

## Retrieve the status of a single status page
The simplest example is one where we get the details of a single status page that has been configured. Below, we'll retrieve the status page with the ID of 1.

```js
let statusPage = ohDearInstance.statusPage.statusPage(1)
```
This will return an instance of [Status Page](../api/classes/statuspage.md).

You can get a few properties of a Status Page.

```js
statusPage.id;
statusPage.title;
statusPage.summarized_status;
...
```

For more extensive understanding of the return values, please have a look at our status page API documentation.

<HelpBlock/>