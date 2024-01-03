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


  const convertToBytes = (value: string): number => {
    const [number, unit] = value.split(" ");
    const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    if (!number) return 0;

    if (!unit) return parseInt(number);

    const index = units.indexOf(unit?.toUpperCase());

    if (index === -1) {
      throw new Error(
        `Invalid unit "${unit}" passed to convertToBytes. Must be one of the following: ${units.join(
          ", "
        )}`
      );
    }

    return parseInt(number) * Math.pow(1024, index);
  };

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
    convertToBytes,
  };

export default utils;
