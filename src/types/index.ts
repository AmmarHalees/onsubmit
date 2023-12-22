export type Criterion = string | number | CustomFunction | boolean | RegExp;

export interface Rule {
  criterion: Criterion;
  message: string;
}

export type FormDataShape = KeyValuePair | { [k: string]: FormDataEntryValue };

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

export interface KeyValuePair {
  [key: string]: string;
}

export interface NameRuleMap {
  [key: string]: RulesObject;
}

export type ValidationFunction<TCriterion> = (
  value: string,
  criterion: TCriterion,
  message: string
) => void;

type MinLengthFunction = ValidationFunction<number>;
type MaxLengthFunction = ValidationFunction<number>;
type PatternFunction = ValidationFunction<RegExp>;
type CustomFunctionType = ValidationFunction<CustomFunction>;
type RequiredFunction = ValidationFunction<boolean>;

// Updated ConfigMap with specific function types
export type ConfigMap = {
  minLength?: MinLengthFunction;
  maxLength?: MaxLengthFunction;
  pattern?: PatternFunction;
  custom?: CustomFunctionType;
  required?: RequiredFunction;
};
