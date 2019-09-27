# Class: ManagesCheckService

## Hierarchy

* [ApiService](apiservice.md)

  ↳ **ManagesCheckService**

## Constructors

###  constructor

\+ **new ManagesCheckService**(`ohDear`: [OhDear](ohdear.md)): *[ManagesCheckService](managescheckservice.md)*

*Inherited from [ApiService](apiservice.md).[constructor](apiservice.md#constructor)*

Defined in services/ApiService.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`ohDear` | [OhDear](ohdear.md) |

**Returns:** *[ManagesCheckService](managescheckservice.md)*

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

###  disableCheck

▸ **disableCheck**(`checkId`: number): *Promise‹[Check](check.md)›*

Defined in services/ManagesChecksService.ts:10

**Parameters:**

Name | Type |
------ | ------ |
`checkId` | number |

**Returns:** *Promise‹[Check](check.md)›*

___

###  enableCheck

▸ **enableCheck**(`checkId`: number): *Promise‹[Check](check.md)›*

Defined in services/ManagesChecksService.ts:5

**Parameters:**

Name | Type |
------ | ------ |
`checkId` | number |

**Returns:** *Promise‹[Check](check.md)›*

___

###  requestRun

▸ **requestRun**(`checkId`: number): *Promise‹[Check](check.md)›*

Defined in services/ManagesChecksService.ts:15

**Parameters:**

Name | Type |
------ | ------ |
`checkId` | number |

**Returns:** *Promise‹[Check](check.md)›*
