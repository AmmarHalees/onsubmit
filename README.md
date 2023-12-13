Custom Usage



# Validator

## Overview
This TypeScript module provides a flexible validation function, `validate`, which can be used to validate various types of data against a set of predefined rules. The module is extensible, allowing for easy addition of new validation rules.

## Function: `validate`

### Description
The `validate` function checks a given value against a set of validation rules. It supports several types of validations including minimum length, maximum length, pattern matching, custom validation, and required field checking.

### Usage

```typescript
import { validate } from './[path-to-validation-module]';
```

**Parameters:**

- `value` (string): The value to be validated.
- `name` (string): The name of the rule set to apply, as defined in `ruleNameMap`.
- `t` (any): An additional parameter, the use of which depends on the specific rule set implementation.

**Return Value:**

Returns an array of error objects, each containing:
- `name` (string): The name of the rule that failed.
- `message` (string): The error message for the failed rule.

If there are no validation errors, the function returns an empty array.

## Extending Validation Rules

New validation rules can be added by extending the `ruleNameMap` object. Each new rule set should be a function that returns an object of `RulesObject` type.

## Rule Types

The following types of rules can be applied:

- `min`: Checks if the value's length is not less than a specified minimum.
- `max`: Checks if the value's length does not exceed a specified maximum.
- `pattern`: Verifies if the value matches a specified regular expression pattern.
- `custom`: Applies a custom function to the value.

```typescript
 custom: {
   value(value) {
     if (value !== 'ammar') {
       return true;
     }
     return false;
   },
   message: 'Birth date should be in the past'
 }
 ```

- `required`: Checks if the value is not just whitespace and is not empty.

Each rule type is handled by the corresponding function in the `configMap`.
