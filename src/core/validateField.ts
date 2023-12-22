import { RulesObject, FieldError, CustomFunction } from "../types";
import _utils from "../utils";

export function validateField(
  value: string,
  name: string,
  rulesObject: RulesObject
): Array<FieldError> {
  const errors: Array<FieldError> = [];

  const configMap: {
    [key: string]: (value: string, criterion: any, message: string) => void;
  } = {
    minLength: (value: string, criterion: number, message: string) => {
      if (!_utils.isString(value))
        throw new Error(
          "File value must be a string to be validated with minLength"
        );

      if (value && value.length > 0 && !(value.length >= criterion)) {
        errors.push({ name, message });
      }
    },
    maxLength: (value: string, criterion: number, message: string) => {
      if (value && !(value.length <= criterion)) {
        errors.push({ name, message });
      }
    },
    pattern: (value: string, criterion: RegExp, message: string) => {
      if (value.length > 0 && !value.match(criterion)) {
        errors.push({ name, message });
      }
    },
    custom: (value: string, criterion: CustomFunction, message: string) => {
      // if the custom function criterion(value) returns true: push an error
      if (criterion(value)) {
        errors.push({ name, message });
      }
    },
    required: (value: string, criterion, message: string) => {
      if (value.replace(/\s/g, "") === "" && criterion) {
        errors.push({ name, message });
      }
    },
  };

  try {
    Object.entries(rulesObject).forEach(([key, { criterion, message }]) => {
      if (configMap[key] && configMap[key] !== undefined) {
        const defaultFunction = () => {};
        (configMap[key] || defaultFunction)(value, criterion, message);
      }
    });
  } catch (e) {
    console.error(e);
  }

  return errors;
}
