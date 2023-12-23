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

  // Invalid CUIDs
  it("rejects incorrect CUIDs", () => {
    const invalidCUIDs = [
      "0123456789abcdef01234567",
      "c!@#$$%^&*()",
      "ckvztazbu000001l5wth4lzdl-too-long",
      // Other invalid CUIDs
    ];

    invalidCUIDs.forEach((cuid) => {
      expect(_regex.cuid.test(cuid)).toBe(false);
    });
  });

  // Test Alphanumeric Regex
  describe("alphanumeric", () => {
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

  describe("Strict Arabic Text and Numbers Regex", () => {
    // Test cases for matching Arabic text with Arabic-Indic numbers
    it("validates strings with Arabic characters and numbers", () => {
      const validStrings = [
        "مرحبا١٢٣٤", // Arabic text with Arabic-Indic numbers
        "١٢٣٤", // Only Arabic-Indic numbers
        "العربية٧٨٩", // Arabic text with Arabic-Indic numbers
        "١٢٣٤",
        "مرحبا، كيف حالك؟",
        "مرحبا١٢٣٤، كيف حالك؟", // Combination of text, numbers, and punctuation
        "٥٦٧٨٩ - أرقام عربية", // Arabic-Indic numerals with text
        "هذه جملة عربية بالكامل.", // Sentence with full stop
        "فاصلة؛ تستخدم للتوقف", // Sentence with Arabic semicolon
        "هل هذا صحيح؟", // Question mark
        "جملة بالعربية - مع شرطة", // Sentence with a dash
        "هل تعلم؟ اللغة العربية ممتعة للغاية.",
        'في العربية، يُستخدم "الفاصلة"، بشكل مختلف.',
        "١٢٣٤ - هذه أرقامٌ عربية؛ وهي مختلفة عن الأرقام الإنجليزية.",
        'أحب البرمجة: هي مجال "رائع" للتعلم!',
        "تُستخدم النقطة العربية . بشكل مماثل للإنجليزية.",
      ];

      validStrings.forEach((str) => {
        expect(_regex.arabic.test(str)).toBe(true);
      });
    });

    // Test cases for rejecting strings with non-Arabic characters or non-Arabic numbers
    it("rejects strings without Arabic characters or numbers", () => {
      const invalidStrings = [
        "Hello - مرحبا", // Mixed English and Arabic
        "مرحبا 1234", // Arabic text with Latin numbers
        "こんにちは, مرحبا", // Mixed Japanese and Arabic
        "مرحبا! English text", // Mixed Arabic and English with non-Arabic punctuation
        "أرقام بالإنجليزية: 12345",
      ];

      invalidStrings.forEach((str) => {
        expect(_regex.arabic.test(str)).toBe(false);
      });
    });
  });
});
