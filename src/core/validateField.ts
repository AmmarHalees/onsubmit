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

  const configMap: ConfigMap = {
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

  function isKeyOfConfigMap(key: string): key is keyof ConfigMap {
    return key in configMap;
  }

  try {
    Object.entries(rulesObject).forEach(([key, { criterion, message }]) => {
      if (isKeyOfConfigMap(key)) {
        const validationFunction = configMap[
          key as keyof ConfigMap
        ] as ValidationFunction<Criterion>;

        if (validationFunction) {
          validationFunction(value, criterion, message);
        } else {
          throw new Error(
            `Validation function for ${key} does not exist in configMap`
          );
        }
      }
    });
  } catch (e) {
    console.error(e);
  }

  return errors;
}
