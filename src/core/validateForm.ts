import { FieldError, NameRuleMap, FormDataObject, RulesObject } from "../types";
import { validateField } from "./validateField";

export function validateForm(
  data: FormDataObject | FormData,
  NameRuleMap: NameRuleMap
) {
  const errors: Array<FieldError> = [];

  if (!NameRuleMap) throw new Error("NameRuleMap is required");

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
