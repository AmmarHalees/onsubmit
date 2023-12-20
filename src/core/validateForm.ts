import { FieldError, NameRuleMap } from "../types";
import { validateField } from "./validateField";

export function validateForm(data: any, RulesMap: NameRuleMap) {
  console.log("validateForm", data, RulesMap);
  const errors: Array<FieldError> = [];

  // Object.entries(data).forEach(([key, value]) => {
  //   errors.push(
  //     ...validateField(value, key, RulesMap[key as keyof typeof RulesMap])
  //   );
  // });
  return errors;
}
