# Class: ManagesDowntimeService

## Hierarchy

* [ApiService](apiservice.md)

  ↳ **ManagesDowntimeService**

## Constructors

###  constructor

\+ **new ManagesDowntimeService**(`ohDear`: [OhDear](ohdear.md)): *[ManagesDowntimeService](managesdowntimeservice.md)*

*Inherited from [ApiService](apiservice.md).[constructor](apiservice.md#constructor)*

Defined in services/ApiService.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`ohDear` | [OhDear](ohdear.md) |

**Returns:** *[ManagesDowntimeService](managesdowntimeservice.md)*

## Properties

###  client

• **client**: *[Client](client.md)*

*Inherited from [ApiService](apiservice.md).[client](apiservice.md#client)*

Defined in services/ApiService.ts:5

___

###  ohDear

• **ohDear**: *[OhDear](ohdear.md)*

*Inherited from [ApiService](apiservice.md).[ohDear](apiservice.md#ohdear)*

Defined in services/ApiService.ts:6

## Methods

###  downtime

▸ **downtime**(`siteId`: number, `startedAt`: string, `endedAt`: string): *Promise‹[Downtime](downtime.md)[]›*

Defined in services/ManagesDowntimeService.ts:5

**Parameters:**

Name | Type |
------ | ------ |
`siteId` | number |
`startedAt` | string |
`endedAt` | string |

**Returns:** *Promise‹[Downtime](downtime.md)[]›*
