---
title: Mixed Content

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

## Getting Mixed content
Here's how to get the mixed content for a given site.

```js
let mixedContnet = await ohDearInstance.SiteInfo.site(siteId)->mixedContent()

//alternatively you could do this
let mixedContnet = await ohDearInstance.MixedContent.mixedContent(siteId)
```


Both methods above will return an array of  [Mixed Content](../guide/classes/mixedcontent.md) instances.

You can get a few properties of a a mixed content item.


```js
// The name of the element that was detected as mixed content.
mixedContentItem.elementName;

// The url of the detected mixed content.
mixedContentItem.mixedContentUrl;

// The url where the mixed content was found.
mixedContentItem.foundOnUrl;
```

<HelpBlock/>