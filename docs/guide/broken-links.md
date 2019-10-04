---
title: Broken Links

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

## Getting broken links 
Here's how to get the broken links for a given site.


```js
let brokenLinks = await ohDearInstance.SiteInfo.site(siteId)->brokenLinks();

//alternatively you could do this
let brokenLinks = await ohDearInstance.brokenLink.brokenLinks(siteId);
```
Both methods above will return an array of [Broken Link](../api/classes/brokenlink.md) instances.

You can get a few properties of a broken link.


```js
// The status code the site responded with
brokenLink.statusCode;

// The url that is broken.
brokenLink.crawledUrl;

// The url where the broken url was found.
brokenLink.foundOnUrl;
```

<HelpBlock/>