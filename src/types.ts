export interface Rule {
  value: any;
  message: string;
}

export interface RulesObject {
  [key: string]: Rule;
}

export interface FieldError {
  name: string;
  message: string;
}

export interface CustomFunction {
  (value: string): boolean;
}

export type ConfigMap = {
  [key: string]: (value: string, limit: any, message: string) => void;
};
