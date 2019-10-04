---
title: Checks

date: 2018-12-28T15:18:13+0200

description: "Documentation on adding, removing, enabling or disabling checks for websites with the Oh Dear! SDK."

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

## List all checks per site

Returns a list of checks for a particular site. 

```js
let site = await ohDearInstance.SiteInfo.site(siteId)
```

First make sure you retive site instance.

```js
let checks = site.check
```
This will return an array with instances of [Check](../api/classes/check.md).

Each [Check](../api/classes/check.md) instance has several methods you can call.


## Enable a check 
If you want to enable the check just call enable on instances.

```js
check.enable();

// Alternative you can do this
let check = await ohDearInstance.Check.enableCheck(checkId)
```

#### Arguments

| Parameter           | Type                              | Description                       |
| :------------------ | :-------------------------------- | :-------------------------------- |
| **checkId**  &nbsp; | <span class="red">required</span> | The unique identifier of a check. |

## Disable a check 
If you want to disable a check just call disable on instances.

```js
check.disable(); 

// Alternative you can do this
let check = await ohDearInstance.Check.disableCheck(checkId)
```

#### Arguments

| Parameter           | Type                              | Description                       |
| :------------------ | :-------------------------------- | :-------------------------------- |
| **checkId**  &nbsp; | <span class="red">required</span> | The unique identifier of a check. |

## Request a new run 
If you want Oh Dear! to perform a specific check now. It'll be added to the queue and checked instantly.

```js
check.requestRun();

// Alternative you can do this
let check = await ohDearInstance.Check.requestRun(checkId)
```

#### Arguments

| Parameter           | Type                              | Description                       |
| :------------------ | :-------------------------------- | :-------------------------------- |
| **checkId**  &nbsp; | <span class="red">required</span> | The unique identifier of a check. |

For more extensive understanding of the return values, please have a look at [check page API documentation](https://ohdear.app/docs/api/checks).

<HelpBlock/>