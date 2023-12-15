import { email } from "./patterns";

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

  isAValidEmail: {
    rules: {
      pattern: {
        value: email,
        message: "Must be a valid email",
      },
    },
    value: "abcgmail.com",
    expectedOutput: [{ name: "testField", message: "Must be a valid email" }],
  },

  isAValidEmail2: {
    rules: {
      pattern: {
        value: email,
        message: "Must be a valid email",
      },
    },
    value: "sss@gmail.com",
    expectedOutput: [],
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

// return true means error
const custom = {
  equality: {
    rules: {
      custom: {
        value: (value: string) => {
          if (value !== "ammar") {
            return true;
          }
          return false;
        },
        message: "Name should be ammar",
      },
    },
    value: "ammar",
    expectedOutput: [],
  },

  inequality: {
    rules: {
      custom: {
        value: (value: string) => {
          if (value !== "ammar") {
            return true;
          }
          return false;
        },
        message: "Name should be ammar",
      },
    },
    value: "ahmed",
    expectedOutput: [{ name: "testField", message: "Name should be ammar" }],
  },

  allCaps: {
    rules: {
      custom: {
        value: (value: string) => {
          if (value !== value.toUpperCase()) {
            return true;
          }
          return false;
        },
        message: "Name should be all caps",
      },
    },
    value: "AMMAR",
    expectedOutput: [],
  },

  noWhiteSpace: {
    rules: {
      custom: {
        value: (value: string) => {
          if (value.includes(" ")) {
            return true;
          }
          return false;
        },
        message: "Name should not contain white space",
      },
    },
    value: "ammar",
    expectedOutput: [],
  },

  noStarAtTheEnd: {
    rules: {
      custom: {
        value: (value: string) => {
          if (value.endsWith("*")) {
            return true;
          }
          return false;
        },
        message: "Name should not end with *",
      },
    },
    value: "ammar*",
    expectedOutput: [
      { name: "testField", message: "Name should not end with *" },
    ],
  },

  hasAtLeast3SpecialCharacters: {
    rules: {
      custom: {
        value: (value: string) => {
          const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
          let count = 0;
          for (let i = 0; i < value.length; i++) {
            if (specialCharacters.includes(value[i] as string)) {
              count++;
            }
          }
          if (count >= 3) {
            return false;
          }
          return true;
        },
        message: "Name should have at least 3 special characters",
      },
    },
    value: "ammar*",
    expectedOutput: [
      {
        name: "testField",
        message: "Name should have at least 3 special characters",
      },
    ],
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
