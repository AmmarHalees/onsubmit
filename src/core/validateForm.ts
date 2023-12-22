import { doKeysMatch } from "../internal/do-keys-match";
import {
  FieldError,
  NameRuleMap,
  KeyValuePair,
  RulesObject,
  FormDataShape,
} from "../types";
import _utils from "../utils";
import { validateField } from "./validateField";


export function validateForm(data: FormDataShape, NameRuleMap: NameRuleMap) {
  const errors: Array<FieldError> = [];

  /*-------- Error Guards --------*/

  if (!NameRuleMap) throw new Error("NameRuleMap is required");
  if (!data) throw new Error("Form Data is required");
  if (_utils.isObject(data) && Object.keys(data).length === 0)
    throw new Error("Form Data is required");

  if (!_utils.isObject(data))
    throw new Error(`Form Data cannot be ${typeof data}`);

  if (_utils.isObject(NameRuleMap) && Object.keys(NameRuleMap).length === 0) {
    throw new Error("NameRuleMap is required");
  }

  if (!_utils.isObject(NameRuleMap)) {
    throw new Error(`NameRuleMap cannot be ${typeof NameRuleMap}`);
  }

  doKeysMatch(data, NameRuleMap);

  /*-------- Normal Function --------*/

  Object.entries(data).forEach(([key, value]) => {
    let stringVal = "";

    if (typeof value === "string") {
      stringVal = value;
    } else if (value instanceof FormData) {
      stringVal = value.get(key) as string;
    }

    if (NameRuleMap) {
      errors.push(
        ...validateField(
          stringVal,
          key,
          NameRuleMap[key as keyof typeof NameRuleMap] as RulesObject
        )
      );
    }
  });
  return errors;
}
