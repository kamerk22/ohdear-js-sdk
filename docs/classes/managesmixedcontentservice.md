# Class: ManagesMixedContentService

## Hierarchy

* [ApiService](apiservice.md)

  ↳ **ManagesMixedContentService**

## Constructors

###  constructor

\+ **new ManagesMixedContentService**(`ohDear`: [OhDear](ohdear.md)): *[ManagesMixedContentService](managesmixedcontentservice.md)*

*Inherited from [ApiService](apiservice.md).[constructor](apiservice.md#constructor)*

Defined in services/ApiService.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`ohDear` | [OhDear](ohdear.md) |

**Returns:** *[ManagesMixedContentService](managesmixedcontentservice.md)*

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

▪ **PATH**: *string* = "mixed-content"

Defined in services/ManagesMixedContentService.ts:5

## Methods

###  mixedContent

▸ **mixedContent**(`siteId`: number): *Promise‹[MixedContent](mixedcontent.md)[]›*

Defined in services/ManagesMixedContentService.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`siteId` | number |

**Returns:** *Promise‹[MixedContent](mixedcontent.md)[]›*
