---
title: Getting Started

date: 2018-12-28T15:18:13+0200

description: 'Documentation on getting started managing the monitoring of your websites with the Oh Dear! Node SDK.'

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

This SDK can be used in browser and nodejs.

### For Node.js

::: warning COMPATIBILITY NOTE
OhDear SDK requires Node.js >= 8.
:::

## Prerequisite

First you should have [node](https://nodejs.org), and make sure it's version 8.10 or above.

```bash
node -v
8.1x
```

## Installation

You can install the latest version of `OhDear-ts-sdk` via [**yarn**](https://yarnpkg.com/) or [**npm**](https://npm.org)

```bash
yarn add ohdear-ts-sdk
```

OR

```bash
npm install ohdear-ts-sdk
```

## Authentication

You can use API key for authentication. If you don't have an API key yet, read up on the [API authentication first](https://ohdear.app/docs/api/authentication).

Next, create an instance of the SDK. This takes your API key as a single, mandatory, parameter.

```js
const ohDear = require('ohdear-ts-sdk')

// Use this instacne to perform all operation
const ohDearInstance = new ohDear('YOUR_API_KEY')
```

Alternatively you can do this

```js
const ohDearInstance = (new require('ohdear-ts-sdk'))('YOUR_API_KEY)
```

<HelpBlock/>
