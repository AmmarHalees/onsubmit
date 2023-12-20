import { validateForm } from "../core/validateForm";
import { describe, it, expect } from "vitest";
import mocks from "../mocks/validateForm.mocks";

describe("validateForm", () => {
  it("should return an array of errors 1", () => {
    const errors = validateForm(
      mocks.example_from_1.value,
      mocks.example_from_1.rules
    );
    expect(errors).toEqual(mocks.example_from_1.expectedOutput);
  });

  it("should return an array of errors 2", () => {
    const errors = validateForm(
      mocks.example_from_2.value,
      mocks.example_from_2.rules
    );
    expect(errors).toEqual(mocks.example_from_2.expectedOutput);
  });

});
