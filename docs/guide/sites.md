---
title: Sites

date: 2018-12-28T15:18:13+0200

description: "Documentation on adding, deleting or modifying the monitoring of your websites with the Oh Dear! SDK."

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

## List all sites
Return a list of sites you've previously created in OhDear account.

```js
let sites = await ohDearInstance.Sites.sites()
```
This will return and array of resource [Site](../api/classes/site.md) instances.

You can access all properties of a site.

## Retrive a site
Retrive the details of an exsisting site. You need to supply unique **`siteId`** that was returned upon registring a site.


```js
let site = await ohDearInstance.site.site(siteId)
```

#### Arguments

| Parameter          | Type                              | Description                      |
| :----------------- | :-------------------------------- | :------------------------------- |
| **siteId**  &nbsp; | <span class="red">required</span> | The unique identifier of a site. |



## Retrive a site by Url
Retrive the details of an exsisting site. You need to supply the **`url`** of site.

```js
let siteByUrl = await client.Site.siteByUrl('https://yourbrandnewsite.tld')
```

#### Arguments

| Parameter           | Type                              | Description        |
| :------------------ | :-------------------------------- | :----------------- |
| **siteUrl**  &nbsp; | <span class="red">required</span> | The url of a site. |



## Registing a site
Register a new site:

```js
let siteToAdd = await ohDearInstance.site.createSite({
  url: 'https://yourbrandnewsite.tld',
  team_id: 1,
})`
```

To learn how to get the **`team_id`** checkout [UserInfo](../guide/user-info.md).


::: tip Tip
When an **`https`** site is created, all checks will automatically be enabled. When an http site is created only the **`uptime`** and **`broken`** links checks will be enabled.
:::

To register a site with specific checks:

```js
let siteToAdd = await ohDearInstance.site.createSite({
  url: 'https://yourbrandnewsite.tld',
  team_id: 1,
  checks: ['uptime', 'broken_links']
})`
```

Valid values to pass to checks are **`uptime`**, **`broken_links`**, **`certificate_health`**, **`mixed_content`** and **`certificate_transparency`**.

#### Arguments

| Parameter           | Type                               | Description                                  |
| :------------------ | :--------------------------------- | :------------------------------------------- |
| **url**  &nbsp;     | <span class="red">required</span>  | The url of a site for monitor.               |
| **team_id**  &nbsp; | <span class="red">required</span>  | The team id where this site should be added. |
| **checks**  &nbsp;  | <span class="grey">optional</span> | Various checks to perform on site.           |


## Deleting a site
Permanently deletes a site and also delete all related checks.

```js
let siteToDelete = await client.Site.deleteSite(siteId)
```

#### Arguments

| Parameter          | Type                              | Description                      |
| :----------------- | :-------------------------------- | :------------------------------- |
| **siteId**  &nbsp; | <span class="red">required</span> | The unique identifier of a site. |



For more extensive understanding of the return values, please have a look at [site page API documentation](https://ohdear.app/docs/api/sites).

<HelpBlock/>