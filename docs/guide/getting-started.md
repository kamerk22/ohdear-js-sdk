---
title: Getting Started

date: 2018-12-28T15:18:13+0200

description: "Documentation on getting started managing the monitoring of your websites with the Oh Dear! Node SDK."

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

::: warning COMPATIBILITY NOTE
OhDear Node SDK requires Node.js >= 8.
:::

## Environmental preparation

First you should have [node](https://nodejs.org), and make sure it's version 8.10 or above. 

``` bash
node -v
8.1x
```

## Installation

Install the latest version of sdk vie **yarn** or **npm**

``` bash
yarn add ohdear-node-sdk
```
OR
```bash 
npm install oh-dear-sdk
```

## Authentication

You can use API key for authentication. If you don't have an API key yet, read up on the [API authentication first](https://ohdear.app/docs/api/authentication).


Next, create an instance of the SDK. This takes your API key as a single, mandatory, parameter.

``` bash
const lib = require('ohdear-ndoe-sdk');

const OhDear = new lib('YOUR_API_KEY');
```


<HelpBlock/>