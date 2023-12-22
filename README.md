<div align="center">
        <a href="" title="onsubmit library link">
            <img src="./static/waves-outline-green.svg" alt="onsubmit library logo" />
        </a>

# onSubmit
</div>

<div align="center">

</div>

<p align="center">
  <a href="#quickstart">Quickstart</a> | 
  <a href="#api">API</a> |
  <a href="#examples">Examples</a> |
  <a target="_blank" href="https://on-submit-website.vercel.app/">Demo</a>
</p>

## Description

`onsubmit` provides a simple and headless interface for validating form fields, with emphasis on security.

### Features

- Light-weight.
- Simple API.
- Zero dependencies.


### Install 

  ```sh
    npm i onsubmit
  ```

### Quickstart


```Typescript
import { validateField } from 'onsubmit';

const firstNameRules = {
  required: { value: true, message: 'First Name is required' },
  minLength: { value: 3, message: 'Minimum length is 3' },
  maxLength: { value: 10, message: 'Maximum length is 10' },
};

// recieve an array of errors
const errors = validateField('Ammar', 'firstName', firstNameRules);

```

### API

#### Methods
| Function        | Description                                           | Parameters                                                        | Returns            |
|-----------------|-------------------------------------------------------|-------------------------------------------------------------------|--------------------|
| `validateField` | Validates a single form field against specified rules.| `value`: The string  value of the field.<br>`name`: Name of the field.<br>`Rules`: Object containing validation rules. | Array of `FieldError` objects, each containing the `name` of the field and the error `message`. |
| `validateForm`  | Validates an entire form.                             | `values`: A key-value pair object of field names and values.<br>`Rules`: A key-value object which maps field names to their rules . | Array of `FieldError` objects for the entire form. |

#### Validation Rules

| Rule       | Description                                  | Expected Value     |
|------------|----------------------------------------------|--------------------|
| `minLength`      | Minimum length of the field's value.         | Number (length)    |
| `maxLength`      | Maximum length of the field's value.         | Number (length)    |
| `pattern`  | Regex pattern the field's value should match.| RegExp             |
| `custom`   | Custom validation logic.                     | Function           |
| `required` | Whether the field is required.               | Boolean            |


### Examples


#### Validate a single field

```Typescript
import { validateField } from 'onsubmit';

const Rules = {
  minLength: { value: 3, message: 'Minimum length is 3' },
  maxLength: { value: 10, message: 'Maximum length is 10' },
  pattern: { value: /^[a-z]+$/, message: 'Only lowercase letters allowed' },
  custom: { value: (value) => value !== 'example', message: 'Value cannot be "example"' },
  required: { value: true, message: 'Field is required' },
};

const errors = validateField('exampleValue', 'fieldName', Rules);
```

#### Validate an entire form

```Typescript
import { validateForm } from 'onsubmit';

const Rules = {
  minLength: { value: 3, message: 'Minimum length is 3' },
  maxLength: { value: 10, message: 'Maximum length is 10' },
  pattern: { value: /^[a-z]+$/, message: 'Only lowercase letters allowed' },
  custom: { value: (value) => value !== 'example', message: 'Value cannot be "example"' },
  required: { value: true, message: 'Field is required' },
};

const values = {
  firstName: 'Ammar',
  lastName: 'Halees',
  email: 'ammar@company.co',
};

const errors = validateForm(values, Rules);
```

#### Validate a form with a custom rule

```Typescript

import { validateForm } from 'onsubmit';

const Rules = {
  custom: { value: (value) => value !== 'example', message: 'Value cannot be "example"' },
};

const values = {
  fieldName1: 'exampleValue1',
  fieldName2: 'exampleValue2',
  fieldName3: 'exampleValue3',
};

const errors = validateForm(values, Rules);
```

## FAQ

### Which rule object has precedence?

The `required` rule has the highest precedence. The remaining rules are evaluated in the order they are specified in the `Rules`.






## Types 
  
  ```Typescript

export interface Rule {
  value: any;
  message: string;
}

export interface Rules {
  required?: Rule;
  minLength?: Rule;
  maxLength?: Rule;
  pattern?: Rule;
  custom?: Rule;
}

export interface FieldError {
  name: string;
  message: string;
}

export interface CustomFunction {
  (value: string): boolean;
}

export interface KeyValuePair {
  [key: string]: string | FormDataEntryValue;
}

export interface NameRuleMap  {
  [key: string]: Rules;
};

export type ConfigMap = {
  [key: string]: (value: string, limit: any, message: string) => void;
};


export type RuleLimit = string | number | RegExp | CustomFunction;

  ```


### Future Plans

- `onlySecure`: In PR.
- `minDate`
- `maxDate`
- `minTime`
- `maxTime`
- Allow for multiple patterns
- `file` : { minSize, maxSize, type, name }