---
title: An introduction to the Oh Dear! Node SDK

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

The OhDear Node library provides convenient models and methods to access the OhDear API from applications written in server-side JavaScript. 

Before moving forword we suggest you to checkout [OhDear REST API](https://ohdear.app/docs/api/introduction) documentation. It'll help you get better understanding.

- Read the [getting started](../guide/getting-started.md) guide for the SDK. 

The SDK currently supports the following services:

| API Name          | Class Name                                                                   | Status |
| ----------------- | ---------------------------------------------------------------------------- | ------ |
| User Info         | [OhDear.UserInfo](../api/classes/managesuserservice.md)                      | :tada: |
| Sites             | [OhDear.Site](../api/classes/managessiteservice.md)                          | :tada: |
| Check             | [OhDear.Check](../api/classes/managescheckservice.md)                        | :tada: |
| BrokenLink        | [OhDear.BrokenLink](../api/classes/managesbrokenlinksservice.md)             | :tada: |
| MixedContent      | [OhDear.MixedContent](../api/classes/managesmixedcontentservice.md)          | :tada: |
| Uptime            | [OhDear.Uptime](../api/classes/managesuptimeservice.md)                      | :tada: |
| Downtime          | [OhDear.Downtime](../api/classes/managesdowntimeservice.md)                  | :tada: |
| CertificateHealth | [OhDear.CertificateHealth](../api/classes/managecertificatehealthservice.md) | :tada: |
| StatusPage        | [OhDear.StatusPage](../api/classes/managesstatuspageservice.md)              | :tada: |

## Features

- 🍁 Support TypeScript, including d.ts definition and
