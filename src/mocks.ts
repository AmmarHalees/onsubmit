const min = {
  pass: {
    rules: {
      min: { value: 3, message: "Minimum length is 3" },
    },
    value: "ab",
    expectedOutput: [{ name: "testField", message: "Minimum length is 3" }],
  },
  fail: {
    rules: {
      min: { value: 3, message: "Minimum length is 3" },
    },
    value: "abc",
    expectedOutput: [],
  },
};

const max = {
  pass: {
    rules: {
      max: { value: 3, message: "Maximum length is 3" },
    },
    value: "abcd",
    expectedOutput: [{ name: "testField", message: "Maximum length is 3" }],
  },
  fail: {
    rules: {
      max: { value: 3, message: "Maximum length is 3" },
    },
    value: "abc",
    expectedOutput: [],
  },
};

const pattern = {
  containsNumnber: {
    rules: {
      pattern: { value: /[0-9]/, message: "Must contain a number" },
    },
    value: "abc",
    expectedOutput: [{ name: "testField", message: "Must contain a number" }],
  },

  containsLetter: {
    rules: {
      pattern: { value: /[a-z]/, message: "Must contain a letter" },
    },
    value: "123",
    expectedOutput: [{ name: "testField", message: "Must contain a letter" }],
  },

  containsSpecialCharacter: {
    rules: {
      pattern: {
        value: /[!@#$%^&*]/,
        message: "Must contain a special character",
      },
    },
    value: "abc123",
    expectedOutput: [
      { name: "testField", message: "Must contain a special character" },
    ],
  },

  containsCapitalLetter: {
    rules: {
      pattern: {
        value: /[A-Z]/,
        message: "Must contain a capital letter",
      },
    },
    value: "abc123",
    expectedOutput: [
      { name: "testField", message: "Must contain a capital letter" },
    ],
  },

  containsSmallLetter: {
    rules: {
      pattern: {
        value: /[a-z]/,
        message: "Must contain a small letter",
      },
    },
    value: "ABC123",
    expectedOutput: [
      { name: "testField", message: "Must contain a small letter" },
    ],
  },

  containsCapitalLetterSpecialCharacterAndNumber: {
    rules: {
      pattern: {
        value: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/,
        message: "Must contain a capital letter, special character and number",
      },
    },
    value: "abc123",
    expectedOutput: [
      {
        name: "testField",
        message: "Must contain a capital letter, special character and number",
      },
    ],
  },
  containsCapitalLetterSpecialCharacterAndNumber2: {
    rules: {
      pattern: {
        value: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/,
        message: "Must contain a capital letter, special character and number",
      },
    },
    value: "abc!@#",
    expectedOutput: [
      {
        name: "testField",
        message: "Must contain a capital letter, special character and number",
      },
    ],
  },

  containsCapitalLetterSpecialCharacterAndNumber3: {
    rules: {
      pattern: {
        value: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/,
        message: "Must contain a capital letter, special character and number",
      },
    },
    value: "abc!@#123",
    expectedOutput: [
      {
        name: "testField",
        message: "Must contain a capital letter, special character and number",
      },
    ],
  },
  containsCapitalLetterSpecialCharacterAndNumber4: {
    rules: {
      pattern: {
        value: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/,
        message: "Must contain a capital letter, special character and number",
      },
    },
    value: "abc!@#123ABC",
    expectedOutput: [],
  },
};

const required = {
  pass: {
    rules: {
      required: { value: true, message: "Required" },
    },
    value: "",
    expectedOutput: [{ name: "testField", message: "Required" }],
  },
  fail: {
    rules: {
      required: { value: true, message: "Required" },
    },
    value: "abc",
    expectedOutput: [],
  },
};

const custom = {
  equality: {
    rules: {
      custom: {
        value(value: number | string) {
          if (value !== "ammar") {
            return true;
          }
          return false;
        },
        message: "Birth date should be in the past",
      },
    },
    value: "abc",
    expectedOutput: [],
  },

  inequality: {
    rules: {
      custom: {
        value: (value: string) => value === "abc",
        message: "Must be abc",
      },
    },
    value: "abcd",
    expectedOutput: [{ name: "testField", message: "Must be abc" }],
  },

  allCaps: {
    rules: {
      custom: {
        value: (value: string) => value === value.toUpperCase(),
        message: "Must be all caps",
      },
    },
    value: "ABC",
    expectedOutput: [],
  },
};

const mocks = {
  min,
  max,
  pattern,
  required,
  custom,
};

export default mocks;
