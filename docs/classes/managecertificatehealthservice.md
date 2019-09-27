# Class: ManageCertificateHealthService

## Hierarchy

* [ApiService](apiservice.md)

  ↳ **ManageCertificateHealthService**

## Constructors

###  constructor

\+ **new ManageCertificateHealthService**(`ohDear`: [OhDear](ohdear.md)): *[ManageCertificateHealthService](managecertificatehealthservice.md)*

*Inherited from [ApiService](apiservice.md).[constructor](apiservice.md#constructor)*

Defined in services/ApiService.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`ohDear` | [OhDear](ohdear.md) |

**Returns:** *[ManageCertificateHealthService](managecertificatehealthservice.md)*

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

###  certificateHealth

▸ **certificateHealth**(`siteId`: number): *Promise‹[CertificateHealth](certificatehealth.md)›*

Defined in services/ManagesCertificateHealthService.ts:5

**Parameters:**

Name | Type |
------ | ------ |
`siteId` | number |

**Returns:** *Promise‹[CertificateHealth](certificatehealth.md)›*
