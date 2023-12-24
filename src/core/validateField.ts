import { MappingError, handleError } from "../internal/error-management";
import {
  RulesObject,
  FieldError,
  CustomFunction,
  ConfigMap,
  ValidationFunction,
  Criterion,
} from "../types";
import _utils from "../utils";

export function validateField(
  value: string,
  name: string,
  rulesObject: RulesObject
): Array<FieldError> {
  const errors: Array<FieldError> = [];
  try {

    if (!_utils.isString(value))
      throw new TypeError("'value' must be a string");

    if (!_utils.isString(name)) throw new TypeError("'name' must be a string");

    const configMap: ConfigMap = {
      minLength: (value: string, criterion: number, message: string) => {
        /*--- Error Guards ---*/

        if (!_utils.isNumber(criterion))
          throw new TypeError("'criterion' must be a number");

        if (!_utils.isString(message))
          throw new TypeError("'message' must be a string");

        /*--- Functionality ---*/

        if (value && value.length > 0 && !(value.length >= criterion)) {
          errors.push({ name, message });
        }
      },
      maxLength: (value: string, criterion: number, message: string) => {
        /*--- Error Guards ---*/

        if (!_utils.isNumber(criterion))
          throw new TypeError("'criterion' must be a number");

        if (!_utils.isString(message))
          throw new TypeError("'message' must be a string");

        /*--- Functionality ---*/

        if (value && !(value.length <= criterion)) {
          errors.push({ name, message });
        }
      },
      pattern: (value: string, criterion: RegExp, message: string) => {
        /*--- Error Guards ---*/

        if (!_utils.isRegExp(criterion))
          throw new TypeError("'criterion' must be a RegExp");

        if (!_utils.isString(message))
          throw new TypeError("'message' must be a string");

        if (value.length > 0 && !value.match(criterion)) {
          errors.push({ name, message });
        }
      },
      custom: (value: string, criterion: CustomFunction, message: string) => {
        /*--- Error Guards ---*/

        if (!_utils.isFunction(criterion))
          throw new TypeError("'criterion' must be a function");

        if (!_utils.isString(message))
          throw new TypeError("'message' must be a string");

        /*--- Functionality ---*/

        if (criterion(value)) {
          errors.push({ name, message });
        }
      },
      required: (value: string, criterion: boolean, message: string) => {
        /*--- Error Guards ---*/

        if (!_utils.isBoolean(criterion))
          throw new TypeError("'criterion' must be a boolean");

        if (!_utils.isString(message))
          throw new TypeError("'message' must be a string");

        /*--- Functionality ---*/

        if (value.replace(/\s/g, "") === "" && criterion) {
          errors.push({ name, message });
        }
      },
    } as const;

    function isKeyOfConfigMap(key: string): key is keyof ConfigMap {
      return key in configMap;
    }

    Object.entries(rulesObject).forEach(([key, { criterion, message }]) => {
      if (isKeyOfConfigMap(key)) {
        const validationFunction = configMap[
          key as keyof ConfigMap
        ] as ValidationFunction<Criterion>;

        if (validationFunction) {
          validationFunction(value, criterion, message);
        } else {
          throw new MappingError(
            `No validation function found for ${key} in configMap`
          );
        }
      }
    });
  } catch (error) {
    if (error instanceof Error) {
      handleError(error);
    } else {
      console.log(error);
    }
  }

  return errors;
}
