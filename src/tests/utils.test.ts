import { describe, it, expect } from "vitest";
import utils from "../utils";
import { JSDOM } from "jsdom";

describe("Utils Tests", () => {
  // Test isDateObject
  describe("isDateObject", () => {
    it("should return true for a Date object", () => {
      expect(utils.isDateObject(new Date())).toBe(true);
    });

    it("returns false for non-Date objects", () => {
      expect(utils.isDateObject(new Date("Invalid Date"))).toBe(false);
      expect(utils.isDateObject("2023-01-01")).toBe(false);
      expect(utils.isDateObject(1234)).toBe(false);
      expect(utils.isDateObject({ date: new Date() })).toBe(false);
      expect(utils.isDateObject(null)).toBe(false);
      expect(utils.isDateObject(undefined)).toBe(false);
      expect(utils.isDateObject(NaN)).toBe(false);
    });

    it("returns true for valid Date objects with different timezones", () => {
      expect(utils.isDateObject(new Date("2023-01-01T00:00:00Z"))).toBe(true);
      expect(utils.isDateObject(new Date("2023-01-01T00:00:00-05:00"))).toBe(
        true
      );
    });

    it("returns true for leap year dates", () => {
      expect(utils.isDateObject(new Date("2024-02-29"))).toBe(true);
    });

    it("returns true for epoch time", () => {
      expect(utils.isDateObject(new Date(0))).toBe(true); // Epoch time
    });
  });

  // Test isString
  describe("isString", () => {
    it("should return true for strings", () => {
      expect(utils.isString("Hello")).toBe(true);
    });

    it("should return false for non-strings", () => {
      expect(utils.isString(123)).toBe(false);
      expect(utils.isString({ text: "Hello" })).toBe(false);
      expect(utils.isString(null)).toBe(false);
      expect(utils.isString(undefined)).toBe(false);
    });

    it("returns true for strings with Unicode characters", () => {
      expect(utils.isString("こんにちは")).toBe(true); // Japanese
      expect(utils.isString("😊")).toBe(true); // Emoji
    });

    it("returns true for templated and multi-line strings", () => {
      expect(utils.isString(`Hello\nWorld`)).toBe(true);
      expect(utils.isString(`Hello ${"World"}`)).toBe(true);
    });

    it("returns true for string objects", () => {
      expect(utils.isString(new String("Hello"))).toBe(true);
    });
  });

  // Test isNumber
  describe("isNumber", () => {
    it("should return true for numbers", () => {
      expect(utils.isNumber(123)).toBe(true);
      expect(utils.isNumber(0)).toBe(true);
      expect(utils.isNumber(-1)).toBe(true);
    });

    it("should return false for non-numbers", () => {
      expect(utils.isNumber("123")).toBe(false);
      expect(utils.isNumber({ number: 123 })).toBe(false);
      expect(utils.isNumber(null)).toBe(false);
      expect(utils.isNumber(undefined)).toBe(false);
    });
    it("returns true for hexadecimal, binary, and octal numbers", () => {
      expect(utils.isNumber(0xff)).toBe(true); // Hexadecimal
      expect(utils.isNumber(0b1010)).toBe(true); // Binary
      expect(utils.isNumber(0o744)).toBe(true); // Octal
    });
    it("returns true for floating point edge cases", () => {
      expect(utils.isNumber(0.1 + 0.2)).toBe(true);
      expect(utils.isNumber(1.7976931348623157e308)).toBe(true); // Max value
    });

    it("returns false for NaN, Infinity, and -Infinity", () => {
      expect(utils.isNumber(NaN)).toBe(false);
      expect(utils.isNumber(Infinity)).toBe(false);
      expect(utils.isNumber(-Infinity)).toBe(false);
    });
  });

  // Test isNullOrUndefined
  describe("isNullOrUndefined", () => {
    it("should return true for null or undefined", () => {
      expect(utils.isNullOrUndefined(null)).toBe(true);
      expect(utils.isNullOrUndefined(undefined)).toBe(true);
    });

    it("should return false for non-null or non-undefined values", () => {
      expect(utils.isNullOrUndefined("NotNull")).toBe(false);
      expect(utils.isNullOrUndefined(false)).toBe(false);
      expect(utils.isNullOrUndefined(NaN)).toBe(false);
      expect(utils.isNullOrUndefined("")).toBe(false);
    });

    it("returns false for objects mimicking null or undefined", () => {
      expect(utils.isNullOrUndefined({ toString: () => "null" })).toBe(false);
    });
  });

  // Test isObject
  describe("isObject", () => {
    it("should return true for objects", () => {
      expect(utils.isObject({})).toBe(true);
      expect(utils.isObject({ key: "value" })).toBe(true);
      expect(utils.isObject(Object.create(null))).toBe(true);
    });

    it("should return false for non-objects", () => {
      expect(utils.isObject("Not an object")).toBe(false);
      expect(utils.isObject(123)).toBe(false);
      expect(utils.isObject(null)).toBe(false);
      expect(utils.isObject(undefined)).toBe(false);
      expect(utils.isObject(new Date())).toBe(false);
      expect(utils.isObject([])).toBe(false);
      expect(utils.isObject(function () {})).toBe(false);
    });

    it("returns true for different object types excluding arrays and functions", () => {
      expect(utils.isObject(new Date())).toBe(false);
      expect(utils.isObject([])).toBe(false);
      expect(utils.isObject(function () {})).toBe(false);
    });

    it("returns true for objects created with Object.create(null)", () => {
      expect(utils.isObject(Object.create(null))).toBe(true);
    });

    it("returns true for Proxy objects", () => {
      const proxy = new Proxy({}, {});
      expect(utils.isObject(proxy)).toBe(true);
    });
  });

  // Test isFile
  describe("isFile", () => {
    const { document } = new JSDOM(``).window;

    it("returns true for input elements of type file", () => {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      expect(utils.isFile(fileInput)).toBe(true);
    });

    it("returns false for non-file input elements and edge cases", () => {
      const textInput = document.createElement("input");
      textInput.type = "text";
      expect(utils.isFile(textInput)).toBe(false);

      const checkboxInput = document.createElement("input");
      checkboxInput.type = "checkbox";
      expect(utils.isFile(checkboxInput)).toBe(false);
    });
  });

  describe("isBoolean", () => {
    it("should return true for booleans", () => {
      expect(utils.isBoolean(true)).toBe(true);
      expect(utils.isBoolean(false)).toBe(true);
    });

    it("should return false for non-booleans", () => {
      expect(utils.isBoolean("true")).toBe(false);
      expect(utils.isBoolean(123)).toBe(false);
      expect(utils.isBoolean(null)).toBe(false);
      expect(utils.isBoolean(undefined)).toBe(false);
    });
  });
});
