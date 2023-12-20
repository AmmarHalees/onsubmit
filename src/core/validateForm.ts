import { FieldError, NameRuleMap, FormDataObject, RulesObject } from "../types";
import isObject from "../utils/isObject";
import { validateField } from "./validateField";

function doKeysMatch(
  data: FormDataObject | FormData,
  NameRuleMap: NameRuleMap
) {
  const dataKeys = Object.keys(data);
  const NameRuleMapKeys = Object.keys(NameRuleMap);

  if (dataKeys.length !== NameRuleMapKeys.length) {
    throw new Error(
      `Data keys and NameRuleMap keys do not match. Data keys: ${dataKeys}, NameRuleMap keys: ${NameRuleMapKeys}`
    );
  }

  dataKeys.forEach((key) => {
    if (!NameRuleMapKeys.includes(key)) {
      throw new Error(
        `Data keys and NameRuleMap keys do not match. Data keys: ${dataKeys}, NameRuleMap keys: ${NameRuleMapKeys}`
      );
    }
  });
}

export function validateForm(
  data: FormDataObject | FormData,
  NameRuleMap: NameRuleMap
) {
  const errors: Array<FieldError> = [];

  /*-------- Error Guards --------*/

  if (!NameRuleMap) throw new Error("NameRuleMap is required");
  if (!data) throw new Error("Form Data is required");
  if (isObject(data) && Object.keys(data).length === 0)
    throw new Error("Form Data is required");

  if (!isObject(data)) throw new Error(`Form Data cannot be ${typeof data}`);

  if (isObject(NameRuleMap) && Object.keys(NameRuleMap).length === 0) {
    throw new Error("NameRuleMap is required");
  }

  if (!isObject(NameRuleMap)) {
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
