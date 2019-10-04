---
title: Status Page Update

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

## Retrieve all updates for status page 
The simplest example is one where we list all your updates of status pages.

```js
let statusPageUpdate = ohDearInstance.statusPageUpdate.updates()
```

This will return an array of [Status Page Update](../api/classes/statuspageupdate.md) instances.

You can get a few properties of a Status Page Update.

```js
statusPageUpdate.id
statusPageUpdate.title 
statusPageUpdate.pinned
statusPageUpdate.severity
statusPageUpdate.time
```

## Post a new update 
You can post a new update to you status page by calling **`postUpdate()`**.

```js
let statusPageUpdate = ohDearInstance.StatusPageUpdate.postUpdate({
    status_page_id: 1,
    title: 'Our site is down',
    text: 'We are working on it!',
	severity: StatusPageSeverity.high,
	time: '2019-09-16 10:24',
    pinned: true
})
```
This will return an instance of [Status Page Update](../api/classes/statuspageupdate.md).

## Delete an update 
Deleting an update is very simple

```js
let deletedUpdate = ohDearInstance.StatusPageUpdate.deleteUpdate(1)
```

<HelpBlock/>