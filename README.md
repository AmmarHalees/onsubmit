<div align="center">
        <a href="" title="onsubmit library link">
            <img src="./src/static/waves-outline-green.svg" alt="onsubmit library logo" />
        </a>

# onSubmit
</div>

<div align="center">



</div>

<p align="center">
  <a href="#quickstart">Quickstart</a> | 
  <a href="#api">API</a> |
  <a href="#examples">Examples</a>
</p>

### Features

- Library-agnostic.
- Lightweight.


### Install 

  ```sh
    npm i onsubmit
  ```

### Quickstart


```Typescript
import { validateField } from 'onsubmit';

// Example validation rules
const rulesObject = {
  min: { value: 3, message: 'Minimum length is 3' },
  max: { value: 10, message: 'Maximum length is 10' },
  // ...other rules
};

// Validate a field
const errors = validateField('exampleValue', 'fieldName', rulesObject);

// Handle errors
if (errors.length > 0) {
  // Process errors
}
```

### API

#### Methods
| Function        | Description                                           | Parameters                                                        | Returns            |
|-----------------|-------------------------------------------------------|-------------------------------------------------------------------|--------------------|
| `validateField` | Validates a single form field against specified rules.| `value`: The value of the field.<br>`name`: Name of the field.<br>`rulesObject`: Object containing validation rules. | Array of `FieldError` objects, each containing the `name` of the field and the error `message`. |
| `validateForm`  | Validates an entire form.                             | `values`: Object with field names as keys and field values as values.<br>`rulesObject`: Object containing validation rules for each field. | Array of `FieldError` objects for the entire form. |

#### Validation Rules

| Rule       | Description                                  | Expected Value     |
|------------|----------------------------------------------|--------------------|
| `min`      | Minimum length of the field's value.         | Number (length)    |
| `max`      | Maximum length of the field's value.         | Number (length)    |
| `pattern`  | Regex pattern the field's value should match.| RegExp             |
| `custom`   | Custom validation logic.                     | Function           |
| `required` | Whether the field is required.               | Boolean            |


### Examples

#### Validate a single field

```Typescript
import { validateField } from 'onsubmit';

const rulesObject = {
  min: { value: 3, message: 'Minimum length is 3' },
  max: { value: 10, message: 'Maximum length is 10' },
  pattern: { value: /^[a-z]+$/, message: 'Only lowercase letters allowed' },
  custom: { value: (value) => value !== 'example', message: 'Value cannot be "example"' },
  required: { value: true, message: 'Field is required' },
};

const errors = validateField('exampleValue', 'fieldName', rulesObject);
```

#### Validate an entire form

```Typescript
import { validateForm } from 'onsubmit';

const rulesObject = {
  min: { value: 3, message: 'Minimum length is 3' },
  max: { value: 10, message: 'Maximum length is 10' },
  pattern: { value: /^[a-z]+$/, message: 'Only lowercase letters allowed' },
  custom: { value: (value) => value !== 'example', message: 'Value cannot be "example"' },
  required: { value: true, message: 'Field is required' },
};

const values = {
  fieldName1: 'exampleValue1',
  fieldName2: 'exampleValue2',
  fieldName3: 'exampleValue3',
};

const errors = validateForm(values, rulesObject);
```

#### Validate a form with a custom rule

```Typescript

import { validateForm } from 'onsubmit';

const rulesObject = {
  custom: { value: (value) => value !== 'example', message: 'Value cannot be "example"' },
};

const values = {
  fieldName1: 'exampleValue1',
  fieldName2: 'exampleValue2',
  fieldName3: 'exampleValue3',
};

const errors = validateForm(values, rulesObject);
```
