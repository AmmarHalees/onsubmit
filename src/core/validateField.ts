import { RulesObject, FieldError, CustomFunction } from "../types";
import isNullOrUndefined from "../utils/isNullOrUndefined";
import isString from "../utils/isString";

export function validateField(
  value: string,
  name: string,
  rulesObject: RulesObject
): Array<FieldError> {
  const errors: Array<FieldError> = [];

  const configMap: {
    [key: string]: (value: string, limit: any, message: string) => void;
  } = {
    minLength: (value: string, limit: number, message: string) => {
      if (!isString(value))
        throw new Error(
          "File value must be a string to be validated with minLength"
        );

      if (value && value.length > 0 && !(value.length >= limit)) {
        errors.push({ name, message });
      }
    },
    maxLength: (value: string, limit: number, message: string) => {
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
