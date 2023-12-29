export interface CustomFunction {
  (value: string): boolean;
}

export interface KeyValuePair {
  [key: string]: string;
}

export type Criterion = string | number | CustomFunction | boolean | RegExp;

export interface Rule<TCriterion = Criterion> {
  criterion: TCriterion;
  message: string;
}


export interface RulesObject {
  required?: Rule<boolean>;
  minLength?: Rule<number>;
  maxLength?: Rule<number>;
  pattern?: Rule<RegExp>;
  custom?: Rule<CustomFunction>;
}

export type FormDataShape = KeyValuePair | { [k: string]: FormDataEntryValue };

export interface FieldError {
  name: string;
  message: string;
}

export interface NameRuleMap {
  [key: string]: RulesObject;
}

export type ValidationFunction<TCriterion> = (
  value: string,
  criterion: TCriterion,
  message: string
) => void;

// Updated ConfigMap with specific function types
export type ConfigMap = {
  minLength?: ValidationFunction<number>;
  maxLength?: ValidationFunction<number>;
  pattern?: ValidationFunction<RegExp>;
  custom?: ValidationFunction<CustomFunction>;
  required?: ValidationFunction<boolean>;
};
