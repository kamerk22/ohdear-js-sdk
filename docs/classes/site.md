# Class: Site

## Hierarchy

* **Site**

## Constructors

###  constructor

\+ **new Site**(`site`: any, `ohDear`: [OhDear](ohdear.md)): *[Site](site.md)*

Defined in resources/Site.ts:18

**Parameters:**

Name | Type |
------ | ------ |
`site` | any |
`ohDear` | [OhDear](ohdear.md) |

**Returns:** *[Site](site.md)*

## Properties

###  checkResult

• **checkResult**: *[CheckResultEnum](../enums/checkresultenum.md)*

Defined in resources/Site.ts:14

___

###  checks

• **checks**: *[Check](check.md)[]*

Defined in resources/Site.ts:15

___

###  createdAt

• **createdAt**: *Date*

Defined in resources/Site.ts:16

___

###  id

• **id**: *number*

Defined in resources/Site.ts:9

___

###  label

• **label**: *string*

Defined in resources/Site.ts:11

___

###  latestRunDate

• **latestRunDate**: *Date*

Defined in resources/Site.ts:13

___

### `Protected` ohDear

• **ohDear**: *[OhDear](ohdear.md)*

Defined in resources/Site.ts:18

___

###  sortUrl

• **sortUrl**: *string*

Defined in resources/Site.ts:12

___

###  updatedAt

• **updatedAt**: *Date*

Defined in resources/Site.ts:17

___

###  url

• **url**: *string*

Defined in resources/Site.ts:10

## Methods

###  brokenLinks

▸ **brokenLinks**(): *Promise‹[BrokenLink](brokenlink.md)[]›*

Defined in resources/Site.ts:37

**Returns:** *Promise‹[BrokenLink](brokenlink.md)[]›*

___

###  delete

▸ **delete**(): *Promise‹[Site](site.md)›*

Defined in resources/Site.ts:33

**Returns:** *Promise‹[Site](site.md)›*

___

###  downtime

▸ **downtime**(`startedAt`: string, `endedAt`: string): *Promise‹[Downtime](downtime.md)[]›*

Defined in resources/Site.ts:45

**Parameters:**

Name | Type |
------ | ------ |
`startedAt` | string |
`endedAt` | string |

**Returns:** *Promise‹[Downtime](downtime.md)[]›*

___

###  uptime

▸ **uptime**(`startedAt`: string, `endedAt`: string, `split`: string): *Promise‹[Uptime](uptime.md)[]›*

Defined in resources/Site.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`startedAt` | string |
`endedAt` | string |
`split` | string |

**Returns:** *Promise‹[Uptime](uptime.md)[]›*
