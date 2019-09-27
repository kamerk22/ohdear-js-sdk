# Class: Check

## Hierarchy

* **Check**

## Constructors

###  constructor

\+ **new Check**(`check`: any, `ohDear`: [OhDear](ohdear.md)): *[Check](check.md)*

Defined in resources/Check.ts:11

**Parameters:**

Name | Type |
------ | ------ |
`check` | any |
`ohDear` | [OhDear](ohdear.md) |

**Returns:** *[Check](check.md)*

## Properties

###  enabled

• **enabled**: *boolean*

Defined in resources/Check.ts:8

___

###  id

• **id**: *number*

Defined in resources/Check.ts:5

___

###  label

• **label**: *string*

Defined in resources/Check.ts:7

___

###  lastRunEndedAt

• **lastRunEndedAt**: *Date | null*

Defined in resources/Check.ts:9

___

###  lastRunResult

• **lastRunResult**: *[CheckResultEnum](../enums/checkresultenum.md)*

Defined in resources/Check.ts:10

___

### `Protected` ohDear

• **ohDear**: *[OhDear](ohdear.md)*

Defined in resources/Check.ts:11

___

###  type

• **type**: *[CheckTypeEnum](../enums/checktypeenum.md)*

Defined in resources/Check.ts:6

## Methods

###  disable

▸ **disable**(): *Promise‹void›*

Defined in resources/Check.ts:28

**Returns:** *Promise‹void›*

___

###  enable

▸ **enable**(): *Promise‹void›*

Defined in resources/Check.ts:23

**Returns:** *Promise‹void›*

___

###  requestRun

▸ **requestRun**(): *Promise‹[Check](check.md)›*

Defined in resources/Check.ts:33

**Returns:** *Promise‹[Check](check.md)›*
