# Class: Client

## Hierarchy

* **Client**

## Constructors

###  constructor

\+ **new Client**(`apiConfig`: AxiosRequestConfig): *[Client](client.md)*

Defined in Client.ts:15

**Parameters:**

Name | Type |
------ | ------ |
`apiConfig` | AxiosRequestConfig |

**Returns:** *[Client](client.md)*

## Properties

### `Private` _AXIOS

• **_AXIOS**: *AxiosInstance*

Defined in Client.ts:15

___

### `Private` _apiConfig

• **_apiConfig**: *AxiosRequestConfig*

Defined in Client.ts:14

## Methods

### `Private` _errorhandler

▸ **_errorhandler**(`error`: AxiosError): *void*

Defined in Client.ts:66

**Parameters:**

Name | Type |
------ | ------ |
`error` | AxiosError |

**Returns:** *void*

___

### `Private` _generateAxiosInstance

▸ **_generateAxiosInstance**(`apiConfig`: AxiosRequestConfig): *AxiosInstance*

Defined in Client.ts:62

**Parameters:**

Name | Type |
------ | ------ |
`apiConfig` | AxiosRequestConfig |

**Returns:** *AxiosInstance*

___

###  delete

▸ **delete**(`url`: string): *Promise‹any›*

Defined in Client.ts:22

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *Promise‹any›*

___

###  get

▸ **get**(`url`: string, `params?`: [IObject](../interfaces/iobject.md)): *Promise‹any›*

Defined in Client.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`params?` | [IObject](../interfaces/iobject.md) |

**Returns:** *Promise‹any›*

___

###  post

▸ **post**(`url`: string, `data`: [IObject](../interfaces/iobject.md)): *Promise‹any›*

Defined in Client.ts:42

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`data` | [IObject](../interfaces/iobject.md) |

**Returns:** *Promise‹any›*

___

###  put

▸ **put**(`url`: string, `data`: [IObject](../interfaces/iobject.md)): *Promise‹any›*

Defined in Client.ts:52

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`data` | [IObject](../interfaces/iobject.md) |

**Returns:** *Promise‹any›*
