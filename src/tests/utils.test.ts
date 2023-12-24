import { describe, it, expect } from "vitest";
import _utils from "../utils";
import { JSDOM } from "jsdom";

describe("Utils Tests", () => {
  // Test isDateObject
  describe("isDateObject", () => {
    it("should return true for a Date object", () => {
      expect(_utils.isDateObject(new Date())).toBe(true);
    });

    it("returns false for non-Date objects", () => {
      expect(_utils.isDateObject(new Date("Invalid Date"))).toBe(false);
      expect(_utils.isDateObject("2023-01-01")).toBe(false);
      expect(_utils.isDateObject(1234)).toBe(false);
      expect(_utils.isDateObject({ date: new Date() })).toBe(false);
      expect(_utils.isDateObject(null)).toBe(false);
      expect(_utils.isDateObject(undefined)).toBe(false);
      expect(_utils.isDateObject(NaN)).toBe(false);
    });

    it("returns true for valid Date objects with different timezones", () => {
      expect(_utils.isDateObject(new Date("2023-01-01T00:00:00Z"))).toBe(true);
      expect(_utils.isDateObject(new Date("2023-01-01T00:00:00-05:00"))).toBe(
        true
      );
    });

    it("returns true for leap year dates", () => {
      expect(_utils.isDateObject(new Date("2024-02-29"))).toBe(true);
    });

    it("returns true for epoch time", () => {
      expect(_utils.isDateObject(new Date(0))).toBe(true); // Epoch time
    });
  });

  // Test isString
  describe("isString", () => {
    it("should return true for strings", () => {
      expect(_utils.isString("Hello")).toBe(true);
    });

    it("should return false for non-strings", () => {
      expect(_utils.isString(123)).toBe(false);
      expect(_utils.isString({ text: "Hello" })).toBe(false);
      expect(_utils.isString(null)).toBe(false);
      expect(_utils.isString(undefined)).toBe(false);
    });

    it("returns true for strings with Unicode characters", () => {
      expect(_utils.isString("こんにちは")).toBe(true); // Japanese
      expect(_utils.isString("😊")).toBe(true); // Emoji
    });

    it("returns true for templated and multi-line strings", () => {
      expect(_utils.isString(`Hello\nWorld`)).toBe(true);
      expect(_utils.isString(`Hello ${"World"}`)).toBe(true);
    });

    it("returns true for string objects", () => {
      expect(_utils.isString(new String("Hello"))).toBe(true);
    });
  });

  // Test isNumber
  describe("isNumber", () => {
    it("should return true for numbers", () => {
      expect(_utils.isNumber(123)).toBe(true);
      expect(_utils.isNumber(0)).toBe(true);
      expect(_utils.isNumber(-1)).toBe(true);
    });

    it("should return false for non-numbers", () => {
      expect(_utils.isNumber("123")).toBe(false);
      expect(_utils.isNumber({ number: 123 })).toBe(false);
      expect(_utils.isNumber(null)).toBe(false);
      expect(_utils.isNumber(undefined)).toBe(false);
    });
    it("returns true for hexadecimal, binary, and octal numbers", () => {
      expect(_utils.isNumber(0xff)).toBe(true); // Hexadecimal
      expect(_utils.isNumber(0b1010)).toBe(true); // Binary
      expect(_utils.isNumber(0o744)).toBe(true); // Octal
    });
    it("returns true for floating point edge cases", () => {
      expect(_utils.isNumber(0.1 + 0.2)).toBe(true);
      expect(_utils.isNumber(1.7976931348623157e308)).toBe(true); // Max value
    });

    it("returns false for NaN, Infinity, and -Infinity", () => {
      expect(_utils.isNumber(NaN)).toBe(false);
      expect(_utils.isNumber(Infinity)).toBe(false);
      expect(_utils.isNumber(-Infinity)).toBe(false);
    });
  });

  // Test isNullOrUndefined
  describe("isNullOrUndefined", () => {
    it("should return true for null or undefined", () => {
      expect(_utils.isNullOrUndefined(null)).toBe(true);
      expect(_utils.isNullOrUndefined(undefined)).toBe(true);
    });

    it("should return false for non-null or non-undefined values", () => {
      expect(_utils.isNullOrUndefined("NotNull")).toBe(false);
      expect(_utils.isNullOrUndefined(false)).toBe(false);
      expect(_utils.isNullOrUndefined(NaN)).toBe(false);
      expect(_utils.isNullOrUndefined("")).toBe(false);
    });

    it("returns false for objects mimicking null or undefined", () => {
      expect(_utils.isNullOrUndefined({ toString: () => "null" })).toBe(false);
    });
  });

  // Test isObject
  describe("isObject", () => {
    it("should return true for objects", () => {
      expect(_utils.isObject({})).toBe(true);
      expect(_utils.isObject({ key: "value" })).toBe(true);
      expect(_utils.isObject(Object.create(null))).toBe(true);
    });

    it("should return false for non-objects", () => {
      expect(_utils.isObject("Not an object")).toBe(false);
      expect(_utils.isObject(123)).toBe(false);
      expect(_utils.isObject(null)).toBe(false);
      expect(_utils.isObject(undefined)).toBe(false);
      expect(_utils.isObject(new Date())).toBe(false);
      expect(_utils.isObject([])).toBe(false);
      expect(_utils.isObject(function () {})).toBe(false);
    });

    it("returns true for different object types excluding arrays and functions", () => {
      expect(_utils.isObject(new Date())).toBe(false);
      expect(_utils.isObject([])).toBe(false);
      expect(_utils.isObject(function () {})).toBe(false);
    });

    it("returns true for objects created with Object.create(null)", () => {
      expect(_utils.isObject(Object.create(null))).toBe(true);
    });

    it("returns true for Proxy objects", () => {
      const proxy = new Proxy({}, {});
      expect(_utils.isObject(proxy)).toBe(true);
    });
  });

  // Test isFile
  describe("isFile", () => {
    const { document } = new JSDOM(``).window;

    it("returns true for input elements of type file", () => {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      expect(_utils.isFile(fileInput)).toBe(true);
    });

    it("returns false for non-file input elements and edge cases", () => {
      const textInput = document.createElement("input");
      textInput.type = "text";
      expect(_utils.isFile(textInput)).toBe(false);

      const checkboxInput = document.createElement("input");
      checkboxInput.type = "checkbox";
      expect(_utils.isFile(checkboxInput)).toBe(false);
    });
  });

  describe("isBoolean", () => {
    it("should return true for booleans", () => {
      expect(_utils.isBoolean(true)).toBe(true);
      expect(_utils.isBoolean(false)).toBe(true);
    });

    it("should return false for non-booleans", () => {
      expect(_utils.isBoolean("true")).toBe(false);
      expect(_utils.isBoolean(123)).toBe(false);
      expect(_utils.isBoolean(null)).toBe(false);
      expect(_utils.isBoolean(undefined)).toBe(false);
    });
  });
});
