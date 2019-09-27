# Class: ManagesSiteService

## Hierarchy

* [ApiService](apiservice.md)

  ↳ **ManagesSiteService**

## Constructors

###  constructor

\+ **new ManagesSiteService**(`ohDear`: [OhDear](ohdear.md)): *[ManagesSiteService](managessiteservice.md)*

*Inherited from [ApiService](apiservice.md).[constructor](apiservice.md#constructor)*

Defined in services/ApiService.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`ohDear` | [OhDear](ohdear.md) |

**Returns:** *[ManagesSiteService](managessiteservice.md)*

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

▪ **PATH**: *string* = "sites"

Defined in services/ManagesSiteService.ts:6

## Methods

###  createSite

▸ **createSite**(`data`: [FObject](../interfaces/fobject.md)): *Promise‹[Site](site.md)›*

Defined in services/ManagesSiteService.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`data` | [FObject](../interfaces/fobject.md) |

**Returns:** *Promise‹[Site](site.md)›*

___

###  deleteSite

▸ **deleteSite**(`siteId`: number): *Promise‹[Site](site.md)›*

Defined in services/ManagesSiteService.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`siteId` | number |

**Returns:** *Promise‹[Site](site.md)›*

___

###  site

▸ **site**(`siteId`: number): *Promise‹[Site](site.md)›*

Defined in services/ManagesSiteService.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`siteId` | number |

**Returns:** *Promise‹[Site](site.md)›*

___

###  siteByUrl

▸ **siteByUrl**(`siteUrl`: string): *Promise‹[Site](site.md)›*

Defined in services/ManagesSiteService.ts:18

**Parameters:**

Name | Type |
------ | ------ |
`siteUrl` | string |

**Returns:** *Promise‹[Site](site.md)›*

___

###  sites

▸ **sites**(): *Promise‹[Site](site.md)[]›*

Defined in services/ManagesSiteService.ts:8

**Returns:** *Promise‹[Site](site.md)[]›*
