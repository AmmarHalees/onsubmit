import {
  getIbanRules,
  getBankBranchRules,
  getReferenceIdRules,
  getDescriptionRules,
  getAttachmentsRules,
  getBankNameRules,
} from "./rules";
import { RuleNameMapType, RulesObject, FieldError } from "./types";

const ruleNameMap: RuleNameMapType = {
  bankName: getBankNameRules,
  bankBranch: getBankBranchRules,
  referenceId: getReferenceIdRules,
  iban: getIbanRules,
  description: getDescriptionRules,
  attachments: getAttachmentsRules,
};

function validateField(value: string, name: string, t: any): Array<FieldError> {
  const rulesObject: RulesObject = ruleNameMap[name](t);
  const errors: Array<FieldError> = [];

  const configMap: {
    [key: string]: (value: string, limit: any, message: string) => void;
  } = {
    min: (value, limit, message) => {
      if (value && value.length > 0 && !(value.length >= limit)) {
        errors.push({ name, message });
      }
    },
    max: (value, limit, message) => {
      if (value && !(value.length <= limit)) {
        errors.push({ name, message });
      }
    },
    pattern: (value, limit, message) => {
      if (value.length > 0 && !value.match(limit)) {
        errors.push({ name, message });
      }
    },
    custom: (value, limit, message) => {
      if (limit(value)) {
        errors.push({ name, message });
      }
    },
    required: (value, limit, message) => {
      if (value.replace(/\s/g, "") === "" && limit) {
        errors.push({ name, message });
      }
    },
  };

  try {
    Object.entries(rulesObject).forEach(
      ([key, { value: ruleValue, message }]) => {
        configMap[key](value, ruleValue, message);
      }
    );
  } catch (e) {
    console.error(e);
  }

  return errors;
}

function validateForm(
  values: { [key: string]: string },
  t: any
): Array<FieldError> {
  const errors: Array<FieldError> = [];

  Object.entries(values).forEach(([key, value]) => {
    errors.push(...validateField(value, key, t));
  });

  return errors;
}

export { validateField, validateForm };
