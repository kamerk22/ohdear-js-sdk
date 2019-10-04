---
title: Get your user info

date: 2018-12-28T15:18:13+0200

description: "Documentation on getting all your user information, like teams &amp; IDs, with the Oh Dear! Node SDK"

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

## Who are you? 
You can get your user info with the convenient **`me()`** method. Behind the scenes, it queries the user info API endpoint.

```js
let user = ohDearInstance.UserInfo.me();
```
```js
user.name; // returns your name
user.email; // returns your email
```

You can get the teams you belong to with through the teams property.

```js
let teams = user.teams;
```
The teams variable is an array of [Team](../api/classes/team.md).

```js
team.id // returns the id of the team
team.name // returns the name of the team
```
A user can belong to multiple teams. The API key you used to authenticate with belongs to a single user.

<HelpBlock/>