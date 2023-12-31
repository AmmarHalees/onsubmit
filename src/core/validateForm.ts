import { doKeysMatch } from "../internal/do-keys-match";
import {
  CustomTypeError,
  RequiredParamError,
  handleError,
} from "../internal/error-management";
import { FieldError, NameRuleMap, RulesObject, FormDataShape } from "../types";
import utils from "../utils";
import { validateField } from "./validateField";

export function validateForm(data: FormDataShape, NameRuleMap: NameRuleMap) {
  const errors: Array<FieldError> = [];

  try {
    /*-------- Error Guards --------*/

    if (!NameRuleMap) throw new RequiredParamError("NameRuleMap is required");
    if (!data) throw new RequiredParamError("data is required");
    if (!utils.isObject(data))
      throw new CustomTypeError(`Form Data cannot be ${typeof data}`);
    if (!utils.isObject(NameRuleMap)) {
      throw new CustomTypeError(`NameRuleMap cannot be ${typeof NameRuleMap}`);
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
  } catch (error) {
    if (error instanceof Error) {
      handleError(error);
    } else {
      console.log(error);
    }
  }

  return errors;
}
