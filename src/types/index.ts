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

export interface RequiredRule extends Rule<boolean> {}

export interface MinLengthRule extends Rule<number> {}

export interface MaxLengthRule extends Rule<number> {}

export interface PatternRule extends Rule<RegExp> {}

export interface CustomRule extends Rule<CustomFunction> {}

export interface RulesObject {
  required?: RequiredRule;
  minLength?: MinLengthRule;
  maxLength?: MaxLengthRule;
  pattern?: PatternRule;
  custom?: CustomRule;
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
