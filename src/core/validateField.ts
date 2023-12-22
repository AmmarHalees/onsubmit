import {
  Rules,
  FieldError,
  CustomFunction,
  ConfigMap,
  Criterion,
  ValidationFunction,
} from "../types";
import _utils from "../utils";

export function validateField(
  value: string,
  name: string,
  Rules: Rules
): Array<FieldError> {
  const errors: Array<FieldError> = [];

  const configMap: ConfigMap = {
    minLength: (value: string, criterion: number, message: string) => {
      /*-------- Error Guards --------*/

      if (!_utils.isString(value))
        throw new Error(
          "Input Value for minLength must be a string to be validated"
        );

      if (!_utils.isNumber(criterion))
        throw new Error(
          "Criterion for minLength must be a number to be validated"
        );

      if (!_utils.isString(message))
        throw new Error(
          "Message for minLength must be a string to be validated"
        );

      /*-------- Normal Function --------*/

      if (value && value.length > 0 && !(value.length >= criterion)) {
        errors.push({ name, message });
      }
    },
    maxLength: (value: string, criterion: number, message: string) => {
      /*-------- Error Guards --------*/

      if (!_utils.isString(value))
        throw new Error(
          "Input Value for maxLength must be a string to be validated"
        );

      if (!_utils.isNumber(criterion))
        throw new Error(
          "Criterion for maxLength must be a number to be validated"
        );

      if (!_utils.isString(message))
        throw new Error(
          "Message for maxLength must be a string to be validated"
        );

      /*-------- Normal Function --------*/
      if (value && !(value.length <= criterion)) {
        errors.push({ name, message });
      }
    },
    pattern: (value: string, criterion: RegExp, message: string) => {
      /*-------- Error Guards --------*/

      if (!_utils.isString(value))
        throw new Error(
          "Input Value for pattern must be a string to be validated"
        );

      // if (!_utils.isRegExp(criterion))

      //   throw new Error(
      //     "Criterion for pattern must be a RegExp to be validated"
      //   );

      if (!_utils.isString(message))
        throw new Error("Message for pattern must be a string to be validated");

      if (value.length > 0 && !value.match(criterion)) {
        errors.push({ name, message });
      }
    },
    custom: (value: string, criterion: CustomFunction, message: string) => {
      /*-------- Error Guards --------*/

      if (!_utils.isString(value))
        throw new Error(
          "Input Value for custom must be a string to be validated"
        );

      // if (!_utils.isFunction(criterion))
      //   throw new Error(
      //     "Criterion for custom must be a function to be validated"
      //   );

      if (!_utils.isString(message))
        throw new Error("Message for custom must be a string to be validated");

      if (criterion(value)) {
        errors.push({ name, message });
      }
    },
    required: (value: string, criterion: boolean, message: string) => {
      if (value.replace(/\s/g, "") === "" && criterion) {
        errors.push({ name, message });
      }
    },
  };

  try {
    Object.entries(Rules).forEach(([key, { value: criterion, message }]) => {
      // Assert that key is a key of ConfigMap

      const validationFunction = configMap[
        key as keyof ConfigMap
      ] as ValidationFunction<Criterion>;

      if (validationFunction) {
        validationFunction(value, criterion, message);
      } else {
        throw new Error(`Invalid Rule: ${key}`);
      }
    });
  } catch (e) {
    console.error(e);
  }

  return errors;
}
