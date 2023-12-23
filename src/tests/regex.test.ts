import { describe, it, expect } from "vitest";
import _regex from "../regex/index";

describe("Regex Tests", () => {
  // Test Email Regex
  describe("email", () => {
    it("validates correct email addresses", () => {
      const validEmails = [
        "simple@example.com",
        "very.common@example.com",
        "disposable.style.email.with+symbol@example.com",
        "other.email-with-hyphen@example.com",
        "fully-qualified-domain@example.com",
        "user.name+tag+sorting@example.com",
        "x@example.com", // One-letter local-part
        "example-indeed@strange-example.com",
        "example@s.example",
        "user%example.com@example.org",
        "user-@example.org",
      ];

      validEmails.forEach((email) => {
        expect(_regex.email.test(email)).toBe(true);
      });
    });

    it("rejects incorrect email addresses", () => {
      const invalidEmails = [
        "Abc.example.com", // No @ character
        "A@b@c@example.com", // Multiple @ characters
        'a"b(c)d,e:f;g<h>i[j\\k]l@example.com', // Special characters
        'just"not"right@example.com', // Quoted strings
        'this is"not\\allowed@example.com', // Spaces, quotes, and backslashes
        'this\\ still\\"not\\\\allowed@example.com',
        "john..doe@example.com", // Double dot before @
        "example@localhost", // Localhost
        "john.doe@example..com", // Double dot after @
        ' "(),:;<>@[\\]  ', // Special characters
        'just"not"right@example.com', // Quoted strings
        'this is"not\\allowed@example.com', // Spaces, quotes, and backslashes
        "john..doe@example.com", // Double dot before @
        "john.doe@example..com", // Double dot after @
      ];

      invalidEmails.forEach((email) => {
        expect(_regex.email.test(email)).toBe(false);
      });
    });
  });

  describe("uri", () => {
    // Valid URIs
    it("validates correct URIs", () => {
      const validURIs = [
        "http://example.com",
        "https://www.example.com",
        "http://example.com/path/to/page?name=ferret&color=purple",
        "https://example.com:8080",
        "http://192.168.1.1",
        "http://example.co.uk",
      ];

      validURIs.forEach((uri) => {
        expect(_regex.uri.test(uri)).toBe(true);
      });
    });

    // Invalid URIs
    it("rejects incorrect URIs", () => {
      const invalidURIs = [
        "justtext",
        "http:/example.com",
        "https://example..com",
        "http://.example.com",
        "http://example.1",
        "//example.com",
        "://example.com",
      ];

      invalidURIs.forEach((uri) => {
        expect(_regex.uri.test(uri)).toBe(false);
      });
    });
  });

  // Test CUID Regex
  // describe("cuid", () => {
  //   // Valid CUIDs
  //   it("validates correct CUIDs", () => {
  //     const validCUIDs = [
  //       "ckvztazbu000001l5wth4lzdl",
  //       "c0123456789abcdef01234567",
  //     ];

  //     validCUIDs.forEach((cuid) => {
  //       expect(_regex.cuid.test(cuid)).toBe(true);
  //     });
  //   });

  //   // Invalid CUIDs
  //   it("rejects incorrect CUIDs", () => {
  //     const invalidCUIDs = [
  //       "0123456789abcdef01234567",
  //       "ckvztazbu0001l5wth4lzdl",
  //       "c!@#$$%^&*()",
  //       "ckvztazbu000001l5wth4lzdl-too-long",
  //       "ckvztazbu000001l5wth4",
  //     ];

  //     invalidCUIDs.forEach((cuid) => {
  //       expect(_regex.cuid.test(cuid)).toBe(false);
  //     });
  //   });
  // });

  //   // Test ULID Regex
  //   describe("ulid", () => {
  //     it("validates correct ULIDs", () => {
  //       expect(_regex.ulid.test("01B4EEAFD4F12R3D7TYMGJ21LZ")).toBe(true); // Corrected ULID
  //       // Add more valid ULID cases
  //     });

  //     it("rejects incorrect ULIDs", () => {
  //       expect(_regex.ulid.test("01B4E")).toBe(false);
  //       expect(_regex.ulid.test("01B4EEAFD4G12R3D7TYMGJ21LZO")).toBe(false);
  //       // Add more invalid ULID cases
  //     });
  //   });

  // Test Alphanumeric Regex
  describe("alphanumeric", () => {
    // Valid alphanumeric strings
    it("validates correct alphanumeric strings", () => {
      const validStrings = [
        "Hello123",
        "123-456",
        "Some text with spaces",
        "More_text_with_underscores",
      ];

      validStrings.forEach((str) => {
        expect(_regex.alphanumeric.test(str)).toBe(true);
      });
    });

    // Invalid alphanumeric strings
    it("rejects incorrect alphanumeric strings", () => {
      const invalidStrings = [
        "Hello@123",
        "NoSpecial#Char",
        "Text With!Symbol",
        "$pecial_Characters",
      ];

      invalidStrings.forEach((str) => {
        expect(_regex.alphanumeric.test(str)).toBe(false);
      });
    });
  });

  // Test Kebab Case Regex
  describe("kebabCase", () => {
    // Valid kebab-case strings
    it("validates correct kebab-case strings", () => {
      const validKebabCases = [
        "kebab-case-string",
        "another-kebab-case",
        "kebab",
      ];

      validKebabCases.forEach((str) => {
        expect(_regex.kebabCase.test(str)).toBe(true);
      });
    });

    // Invalid kebab-case strings
    it("rejects incorrect kebab-case strings", () => {
      const invalidKebabCases = [
        "kebab_Case",
        "kebab--case",
        "notKebabCase",
        "kebab-case-",
      ];

      invalidKebabCases.forEach((str) => {
        expect(_regex.kebabCase.test(str)).toBe(false);
      });
    });
  });
});
