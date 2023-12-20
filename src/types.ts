export interface Rule {
  value: any;
  message: string;
}

export interface RulesObject {
  required?: Rule;
  minLength?: Rule;
  maxLength?: Rule;
  pattern?: Rule;
  custom?: Rule;
}

export interface FieldError {
  name: string;
  message: string;
}

export interface CustomFunction {
  (value: string): boolean;
}

export interface FormDataObject {
  [key: string]: string;
}

export interface NameRuleMap  {
  [key: string]: RulesObject;
};

export type ConfigMap = {
  [key: string]: (value: string, limit: any, message: string) => void;
};


export type RuleLimit = string | number | RegExp | CustomFunction;
