import { describe, it, expect } from "vitest";
import { validateField } from "../index";
import mocks from "../mocks/validateField.mocks";

describe("validateField", () => {
  it("should validate minimum length", () => {
    expect(
      validateField(
        mocks.minLength.pass.input,
        "testField",
        mocks.minLength.pass.rules
      )
    ).toEqual(mocks.minLength.pass.expectedOutput);

    expect(
      validateField(
        mocks.minLength.fail.input,
        "testField",
        mocks.minLength.fail.rules
      )
    ).toEqual([]);
  });

  it("should validate maximum length", () => {
    expect(
      validateField(
        mocks.maxLength.pass.input,
        "testField",
        mocks.maxLength.pass.rules
      )
    ).toEqual(mocks.maxLength.pass.expectedOutput);
    expect(
      validateField(
        mocks.maxLength.fail.input,
        "testField",
        mocks.maxLength.fail.rules
      )
    ).toEqual(mocks.maxLength.fail.expectedOutput);
  });

  it("should validate pattern", () => {
    expect(
      validateField(
        mocks.pattern.containsNumnber.input,
        "testField",
        mocks.pattern.containsNumnber.rules
      )
    ).toEqual(mocks.pattern.containsNumnber.expectedOutput);

    expect(
      validateField(
        mocks.pattern.isAValidEmail.input,
        "testField",
        mocks.pattern.isAValidEmail.rules
      )
    ).toEqual(mocks.pattern.isAValidEmail.expectedOutput);

    expect(
      validateField(
        mocks.pattern.isAValidEmail2.input,
        "testField",
        mocks.pattern.isAValidEmail2.rules
      )
    ).toEqual(mocks.pattern.isAValidEmail2.expectedOutput);

    expect(
      validateField(
        mocks.pattern.containsLetter.input,
        "testField",
        mocks.pattern.containsLetter.rules
      )
    ).toEqual(mocks.pattern.containsLetter.expectedOutput);

    expect(
      validateField(
        mocks.pattern.containsSpecialCharacter.input,
        "testField",
        mocks.pattern.containsSpecialCharacter.rules
      )
    ).toEqual(mocks.pattern.containsSpecialCharacter.expectedOutput);

    expect(
      validateField(
        mocks.pattern.containsCapitalLetter.input,
        "testField",
        mocks.pattern.containsCapitalLetter.rules
      )
    ).toEqual(mocks.pattern.containsCapitalLetter.expectedOutput);

    expect(
      validateField(
        mocks.pattern.containsSmallLetter.input,
        "testField",
        mocks.pattern.containsSmallLetter.rules
      )
    ).toEqual(mocks.pattern.containsSmallLetter.expectedOutput);

    expect(
      validateField(
        mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber.input,
        "testField",
        mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber.rules
      )
    ).toEqual(
      mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber
        .expectedOutput
    );
    expect(
      validateField(
        mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber2.input,
        "testField",
        mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber2.rules
      )
    ).toEqual(
      mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber2
        .expectedOutput
    );
    expect(
      validateField(
        mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber3.input,
        "testField",
        mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber3.rules
      )
    ).toEqual(
      mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber3
        .expectedOutput
    );
    expect(
      validateField(
        mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber4.input,
        "testField",
        mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber4.rules
      )
    ).toEqual(
      mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber4
        .expectedOutput
    );
    expect(
      validateField(
        mocks.pattern.isValidURI.input,
        "testField",
        mocks.pattern.isValidURI.rules
      )
    ).toEqual(mocks.pattern.isValidURI.expectedOutput);
    expect(
      validateField(
        mocks.pattern.isValidCUID.input,
        "testField",
        mocks.pattern.isValidCUID.rules
      )
    ).toEqual(mocks.pattern.isValidCUID.expectedOutput);
    expect(
      validateField(
        mocks.pattern.isValidCUID2.input,
        "testField",
        mocks.pattern.isValidCUID2.rules
      )
    ).toEqual(mocks.pattern.isValidCUID2.expectedOutput);
    expect(
      validateField(
        mocks.pattern.isValidULID.input,
        "testField",
        mocks.pattern.isValidULID.rules
      )
    ).toEqual(mocks.pattern.isValidULID.expectedOutput);
  });

  it("should validate required", () => {
    expect(
      validateField(
        mocks.required.pass.input,
        "testField",
        mocks.required.pass.rules
      )
    ).toEqual(mocks.required.pass.expectedOutput);
    expect(
      validateField(
        mocks.required.fail.input,
        "testField",
        mocks.required.fail.rules
      )
    ).toEqual(mocks.required.fail.expectedOutput);
  });

  it("should validate custom", () => {
    expect(
      validateField(
        mocks.custom.equality.input,
        "testField",
        mocks.custom.equality.rules
      )
    ).toEqual(mocks.custom.equality.expectedOutput);
    expect(
      validateField(
        mocks.custom.inequality.input,
        "testField",
        mocks.custom.inequality.rules
      )
    ).toEqual(mocks.custom.inequality.expectedOutput);

    expect(
      validateField(
        mocks.custom.allCaps.input,
        "testField",
        mocks.custom.allCaps.rules
      )
    ).toEqual(mocks.custom.allCaps.expectedOutput);

    expect(
      validateField(
        mocks.custom.noWhiteSpace.input,
        "testField",
        mocks.custom.noWhiteSpace.rules
      )
    ).toEqual(mocks.custom.noWhiteSpace.expectedOutput);

    expect(
      validateField(
        mocks.custom.noStarAtTheEnd.input,
        "testField",
        mocks.custom.noStarAtTheEnd.rules
      )
    ).toEqual(mocks.custom.noStarAtTheEnd.expectedOutput);

    expect(
      validateField(
        mocks.custom.hasAtLeast3SpecialCharacters.input,
        "testField",
        mocks.custom.hasAtLeast3SpecialCharacters.rules
      )
    ).toEqual(mocks.custom.hasAtLeast3SpecialCharacters.expectedOutput);
  });

  it("should validate multiple rules", () => {
    expect(
      validateField(
        mocks.multipleRules.case1.input,
        "testField",
        mocks.multipleRules.case1.rules
      )
    ).toEqual(mocks.multipleRules.case1.expectedOutput);

    expect(
      validateField(
        mocks.multipleRules.case2.input,
        "testField",
        mocks.multipleRules.case2.rules
      )
    ).toEqual(mocks.multipleRules.case2.expectedOutput);
  });
});
