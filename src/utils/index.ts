const isDateObject = (value: unknown): value is Date =>
  value instanceof Date && !isNaN((value as Date).getTime());
const isString = (value: unknown): value is string =>
  typeof value === "string" || value instanceof String;
const isNumber = (value: unknown): value is number =>
  typeof value === "number" && isFinite(value);
const isNullOrUndefined = (value: unknown): value is null | undefined =>
  value == null;

const isBoolean = (value: unknown): value is boolean =>
  typeof value === "boolean";

const isObjectType = (value: unknown): value is object =>
  typeof value === "object";

const isFunction = (value: unknown): value is Function =>
  typeof value === "function";

const isObject = <T extends object>(value: unknown): value is T =>
  !isNullOrUndefined(value) &&
  !Array.isArray(value) &&
  isObjectType(value) &&
  !isDateObject(value);

const isRegExp = (value: unknown): value is RegExp => value instanceof RegExp;

const isFile = (element: HTMLInputElement): element is HTMLInputElement =>
  element.type === "file";

const utils = {
  isDateObject,
  isString,
  isNumber,
  isNullOrUndefined,
  isObject,
  isFile,
  isBoolean,
  isFunction,
  isRegExp,
};

export default utils;
