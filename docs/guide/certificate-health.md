---
title: Certificate Health

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

## Getting the certificate

If your site has its certificate health check enabled, you can get some information regarding the found certificate.

```js
let certificate = ohDearInstance.site.site(siteId).certificate()

//alternatively you could do this
let certificate = ohDear.certificateHealth.certificate(siteId)
```

#### Arguments

| Parameter         | Type                              | Description                      |
| :---------------- | :-------------------------------- | :------------------------------- |
| **siteId** &nbsp; | <span class="red">required</span> | The unique identifier of a site. |

Both methods above will return an [Certificate Health]('../api/classes/certificatehealth.md') instance.

You can get the properties of a certificate

```js
// An array containing some details about the certificate itself
certificate.certificateDetails

// An array containing all the checks we performed on the certificate
certificate.certificateChecks

// An array containing the names of all the issuers in the certificate chain.
certificate.certificateChainIssuers
```

**`certificate.certificateChecks`** will return an array of [Certificate Health Check](../api/classes/certificatecheck.md) instance.

The specific return values are described in the certificate health API endpoint.

<HelpBlock/>
