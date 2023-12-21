const isDateObject = (value: unknown): value is Date => value instanceof Date;
const isString = (value: unknown): value is string => typeof value === "string";
const isNumber = (value: unknown): value is number => typeof value === "number";
const isNullOrUndefined = (value: unknown): value is null | undefined =>
  value == null;

const isObjectType = (value: unknown): value is object =>
  typeof value === "object";

const isObject = <T extends object>(value: unknown): value is T =>
  !isNullOrUndefined(value) &&
  !Array.isArray(value) &&
  isObjectType(value) &&
  !isDateObject(value);

const isFile = (element: HTMLInputElement): element is HTMLInputElement =>
  element.type === "file";

const _utils = {
  isDateObject,
  isString,
  isNumber,
  isNullOrUndefined,
  isObject,
  isFile,
};

export default _utils;
