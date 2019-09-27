# Class: ManagesUptimeService

## Hierarchy

* [ApiService](apiservice.md)

  ↳ **ManagesUptimeService**

## Constructors

###  constructor

\+ **new ManagesUptimeService**(`ohDear`: [OhDear](ohdear.md)): *[ManagesUptimeService](managesuptimeservice.md)*

*Inherited from [ApiService](apiservice.md).[constructor](apiservice.md#constructor)*

Defined in services/ApiService.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`ohDear` | [OhDear](ohdear.md) |

**Returns:** *[ManagesUptimeService](managesuptimeservice.md)*

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

###  uptime

▸ **uptime**(`siteId`: number, `startedAt`: string, `endedAt`: string, `split`: string): *Promise‹[Uptime](uptime.md)[]›*

Defined in services/ManagesUptimeService.ts:5

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`siteId` | number | - |
`startedAt` | string | - |
`endedAt` | string | - |
`split` | string | "month" |

**Returns:** *Promise‹[Uptime](uptime.md)[]›*
