import { validateForm } from "../core/validateForm";
import { describe, it, expect } from "vitest";

describe("validateForm", () => {
  it("should return an array of errors", () => {
    const data = {
      firstName: "John",
      email: "ammarmail.com",
    };
    const NameRuleMap = {
      name: {
        required: {
          value: true,
          message: "Name is required",
        },
      },
      email: {
        required: {
          value: true,
          message: "Email is required",
        },
        pattern: {
          value: /^.+@.+\..+$/,
          message: "Email is invalid",
        },
      },
    };
    const errors = validateForm(data, NameRuleMap);
    expect(errors).toEqual([
      {
        name: "email",
        message: "Email is invalid",
      },
    ]);
  });
});
