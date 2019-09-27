# Class: ManagesBrokenLinksService

## Hierarchy

* [ApiService](apiservice.md)

  ↳ **ManagesBrokenLinksService**

## Constructors

###  constructor

\+ **new ManagesBrokenLinksService**(`ohDear`: [OhDear](ohdear.md)): *[ManagesBrokenLinksService](managesbrokenlinksservice.md)*

*Inherited from [ApiService](apiservice.md).[constructor](apiservice.md#constructor)*

Defined in services/ApiService.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`ohDear` | [OhDear](ohdear.md) |

**Returns:** *[ManagesBrokenLinksService](managesbrokenlinksservice.md)*

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

___

### `Static` PATH

▪ **PATH**: *string* = "broken-links"

Defined in services/ManagesBrokenLinksService.ts:5

## Methods

###  brokenLinks

▸ **brokenLinks**(`siteId`: number): *Promise‹[BrokenLink](brokenlink.md)[]›*

Defined in services/ManagesBrokenLinksService.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`siteId` | number |

**Returns:** *Promise‹[BrokenLink](brokenlink.md)[]›*
