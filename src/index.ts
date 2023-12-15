import { RulesObject, FieldError, CustomFunction } from "./types";
import isString from "./utils/isString";

function validateField(
  value: string,
  name: string,
  rulesObject: RulesObject
): Array<FieldError> {
  const errors: Array<FieldError> = [];

  const configMap: {
    [key: string]: (value: string, limit: any, message: string) => void;
  } = {
    min: (value: string, limit: number, message: string) => {
      if (
        value &&
        isString(value) &&
        value.length > 0 &&
        !(value.length >= limit)
      ) {
        errors.push({ name, message });
      } else {
        console.warn("empty or non-string input");
      }
    },
    max: (value: string, limit: number, message: string) => {
      if (value && !(value.length <= limit)) {
        errors.push({ name, message });
      }
    },
    pattern: (value: string, limit: RegExp, message: string) => {
      if (value.length > 0 && !value.match(limit)) {
        errors.push({ name, message });
      }
    },
    custom: (value: string, limit: CustomFunction, message: string) => {
      // if the custom function limit(value) returns true: push an error
      if (limit(value)) {
        errors.push({ name, message });
      }
    },
    required: (value: string, limit, message: string) => {
      if (value.replace(/\s/g, "") === "" && limit) {
        errors.push({ name, message });
      }
    },
  };

  try {
    Object.entries(rulesObject).forEach(
      ([key, { value: ruleValue, message }]) => {
        if (configMap[key] && configMap[key] !== undefined) {
          const defaultFunction = () => {};
          (configMap[key] || defaultFunction)(value, ruleValue, message);
        }
      }
    );
  } catch (e) {
    console.error(e);
  }

  return errors;
}

function validateForm(
  values: { [key: string]: string },
  t: any
): Array<FieldError> {
  const errors: Array<FieldError> = [];

  Object.entries(values).forEach(([key, value]) => {
    errors.push(...validateField(value, key, t));
  });

  return errors;
}

export { validateField, validateForm };
