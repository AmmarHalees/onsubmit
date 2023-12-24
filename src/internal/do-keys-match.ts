import { FormDataShape, NameRuleMap } from "../types";
import { MappingError } from "./error-management";

export function doKeysMatch(
  data: FormDataShape,
  NameRuleMap: NameRuleMap
): void {
  const dataKeys = Object.keys(data);
  const NameRuleMapKeys = Object.keys(NameRuleMap);

  if (dataKeys.length !== NameRuleMapKeys.length) {
    throw new MappingError(
      `Data keys and NameRuleMap keys do not match. Data keys: ${dataKeys}, NameRuleMap keys: ${NameRuleMapKeys}`
    );
  }

  dataKeys.forEach((key) => {
    if (!NameRuleMapKeys.includes(key)) {
      throw new MappingError(
        `Data keys and NameRuleMap keys do not match. Data keys: ${dataKeys}, NameRuleMap keys: ${NameRuleMapKeys}`
      );
    }
  });
}
