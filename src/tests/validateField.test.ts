// validateField.test.ts
import { describe, it, expect } from "vitest";
import { validateField } from "../index";
import { RulesObject } from "../types";
import mocks from "../mocks";

describe("validateField", () => {
  it("should validate minimum length", () => {
    expect(
      validateField(mocks.min.pass.value, "testField", mocks.min.pass.rules)
    ).toEqual(mocks.min.pass.expectedOutput);

    expect(
      validateField(mocks.min.fail.value, "testField", mocks.min.fail.rules)
    ).toEqual([]);
  });

  it("should validate maximum length", () => {
    expect(
      validateField(mocks.max.pass.value, "testField", mocks.max.pass.rules)
    ).toEqual(mocks.max.pass.expectedOutput);
    expect(
      validateField(mocks.max.fail.value, "testField", mocks.max.fail.rules)
    ).toEqual(mocks.max.fail.expectedOutput);
  });

  it("should validate pattern", () => {
    expect(
      validateField(
        mocks.pattern.containsNumnber.value,
        "testField",
        mocks.pattern.containsNumnber.rules
      )
    ).toEqual(mocks.pattern.containsNumnber.expectedOutput);

    expect(
      validateField(
        mocks.pattern.containsLetter.value,
        "testField",
        mocks.pattern.containsLetter.rules
      )
    ).toEqual(mocks.pattern.containsLetter.expectedOutput);

    expect(
      validateField(
        mocks.pattern.containsSpecialCharacter.value,
        "testField",
        mocks.pattern.containsSpecialCharacter.rules
      )
    ).toEqual(mocks.pattern.containsSpecialCharacter.expectedOutput);

    expect(
      validateField(
        mocks.pattern.containsCapitalLetter.value,
        "testField",
        mocks.pattern.containsCapitalLetter.rules
      )
    ).toEqual(mocks.pattern.containsCapitalLetter.expectedOutput);

    expect(
      validateField(
        mocks.pattern.containsSmallLetter.value,
        "testField",
        mocks.pattern.containsSmallLetter.rules
      )
    ).toEqual(mocks.pattern.containsSmallLetter.expectedOutput);

    expect(
      validateField(
        mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber.value,
        "testField",
        mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber.rules
      )
    ).toEqual(
      mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber
        .expectedOutput
    );

    expect(
      validateField(
        mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber2.value,
        "testField",
        mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber2.rules
      )
    ).toEqual(
      mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber2
        .expectedOutput
    );

    expect(
      validateField(
        mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber3.value,
        "testField",
        mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber3.rules
      )
    ).toEqual(
      mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber3
        .expectedOutput
    );

    expect(
      validateField(
        mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber4.value,
        "testField",
        mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber4.rules
      )
    ).toEqual(
      mocks.pattern.containsCapitalLetterSpecialCharacterAndNumber4
        .expectedOutput
    );
  });

  it("should validate required", () => {
    expect(
      validateField(
        mocks.required.pass.value,
        "testField",
        mocks.required.pass.rules
      )
    ).toEqual(mocks.required.pass.expectedOutput);
    expect(
      validateField(
        mocks.required.fail.value,
        "testField",
        mocks.required.fail.rules
      )
    ).toEqual(mocks.required.fail.expectedOutput);
  });

  it("should validate custom", () => {
    expect(
      validateField(
        mocks.custom.equality.value,
        "testField",
        mocks.custom.equality.rules
      )
    ).toEqual(mocks.custom.equality.expectedOutput);
    // expect(
    //   validateField(
    //     mocks.custom.inequality.value,
    //     "testField",
    //     mocks.custom.inequality.rules
    //   )
    // ).toEqual(mocks.custom.inequality.expectedOutput);

    // expect(
    //   validateField(
    //     mocks.custom.allCaps.value,
    //     "testField",
    //     mocks.custom.allCaps.rules
    //   )
    // ).toEqual(mocks.custom.allCaps.expectedOutput);
  });
});
