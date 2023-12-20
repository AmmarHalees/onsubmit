import { FormDataObject, NameRuleMap } from "../types";

export function doKeysMatch(
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
