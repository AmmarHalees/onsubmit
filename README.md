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
  <a target="_blank" href="https://codesandbox.io/p/github/AmmarHalees/on-submit-website/main?file=%2Fsrc%2Fcomponents%2FUncontrolledForm%2FUncontrolledForm.tsx%3A22%2C4-22%2C49">Codesandbox</a> |
  <a target="_blank" href="https://on-submit-website.vercel.app/">Demo</a>
</p>

## Description

`onsubmit` is the simplest, least set-up needing way to validate an input or a form. On the client or on the server.



### Features

- Light-weight. (~1KB gzipped)
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
  required: { criterion: true, message: 'First Name is required' },
  minLength: { criterion: 3, message: 'Minimum length is 3' },
  maxLength: { criterion: 10, message: 'Maximum length is 10' },
};

// recieve an array of errors
const errors = validateField('Ammar', 'firstName', firstNameRules);

```

### API

#### Methods
| Function        | Description                                           | Parameters                                                        | Returns            |
|-----------------|-------------------------------------------------------|-------------------------------------------------------------------|--------------------|
| `validateField` | Validates a single form field against specified rules.| `value`: The string  value of the field. <br> <br>`name`: Name of the field.<br> <br> `rules`: Object containing validation rules. | Array of `FieldError` objects, each containing the `name` of the field and the error `message`. |
| `validateForm`  | Validates an entire form.                             | `values`: A key-value pair object of field names and values.<br> <br>`rules`: A key-value object which maps field names to their rules . | Array of `FieldError` objects for the entire form. |

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

const emailRules = {
  required: { criterion: true, message: 'Email is required' },
  pattern: {
    criterion: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    mesaage: 'Invalid email',
  },
};

const errors = validateField('ammar@winenergy.co' , 'email', emailRules);

```
<br>

#### Custom validation logic

```Typescript

import { validateForm } from 'onsubmit';

const rulesObject = {
  custom: {
    criterion: (value) => value === password,
    message: 'Passwords do not match',
  }
};

const errors = validateField(passwordRepeat, 'passwordRepeat', rulesObject);
```
<br>

#### Validate some data

```Typescript
import { validateForm } from 'onsubmit';

const rulesObject = {
  minLength: { criterion: 3, message: 'Minimum length is 3' },
  maxLength: { criterion: 10, message: 'Maximum length is 10' },
  pattern: { criterion: /^[a-z]+$/, message: 'Only lowercase letters allowed' },
  custom: { criterion: (value) => value !== 'example', message: 'Value cannot be "example"' },
  required: { criterion: true, message: 'Field is required' },
};

const data = {
  firstName: 'Ammar',
  lastName: 'Halees',
  email: 'ammar@company.co',
};

const errors = validateForm(data, rulesObject);
```
<br>

#### Validate a form
  
  ```Typescript
  import { validateForm } from 'onsubmit';

  const handleOnsubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const errors = validateForm(data, RulesMap);
  };
```
<br>

### Utils and patterns

#### utils

`onsubmit` provides a set of utility functions and patterns to help you build your forms.

| Function Name     | Type Signature                                                                  | Description                                                                                                                                               |
|-------------------|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `isDateObject`    | `(value: unknown) => value is Date`                                              | Checks if the given value is a valid `Date` object.                                                                                                        |
| `isString`        | `(value: unknown) => value is string`                                            | Determines if the provided value is a string. This includes both string literals and `String` objects.                                                     |
| `isNumber`        | `(value: unknown) => value is number`                                            | Verifies if the value is a number and is finite.                                                                                                           |
| `isNullOrUndefined` | `(value: unknown) => value is null \| undefined`                                | Checks if the value is either `null` or `undefined`.                                                                                                       |
| `isObject`        | `<T extends object>(value: unknown) => value is T`                               | Determines if a value is an object. This excludes `null`, arrays, and `Date` objects.                                                                      |
| `isFile`          | `(element: HTMLInputElement) => element is HTMLInputElement`                     | Checks if an HTML input element is of type `file`.                                                                                                         |


#### _patterns


1. `email`
2. `uri`
3. `alphanumeric`
4. `cuid`
5. `kebabCase`
6. `arabic`



<br>


## FAQ

### Which rule object has precedence?

The `required` rule has the highest precedence. The remaining rules are evaluated in the order they are specified in the `rulesObject`.






## Types 
  
  ```Typescript

type Criterion = string | number | CustomFunction | boolean | RegExp;

interface Rule {
  criterion: Criterion;
  message: string;
}

type FormDataShape = KeyValuePair | { [k: string]: FormDataEntryValue };

interface RulesObject {
  required?: Rule;
  minLength?: Rule;
  maxLength?: Rule;
  pattern?: Rule;
  custom?: Rule;
}

  ```


### TODO


- `onlySecure` opt-out rule.
- `minDate` rule.
- `maxDate` rule.
- `minTime` rule.rule
- `maxTime` rule
- `file` rule: { minSize, maxSize, type, name }
- `cardNumber` pattern.
- `cardCompany` utility.
- Benchmarking
- Allow for multiple patterns
