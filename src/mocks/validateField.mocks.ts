import regex from "../regex";
import constants from "../constants.json";

const minLength = {
  pass: {
    rules: {
      minLength: { criterion: 3, message: "Minimum length is 3" },
    },
    value: "ab",
    expectedOutput: [{ name: "testField", message: "Minimum length is 3" }],
  },
  fail: {
    rules: {
      minLength: { criterion: 3, message: "Minimum length is 3" },
    },
    value: "abc",
    expectedOutput: [],
  },
};

const maxLength = {
  pass: {
    rules: {
      maxLength: { criterion: 3, message: "Maximum length is 3" },
    },
    value: "abcd",
    expectedOutput: [{ name: "testField", message: "Maximum length is 3" }],
  },
  fail: {
    rules: {
      maxLength: { criterion: 3, message: "Maximum length is 3" },
    },
    value: "abc",
    expectedOutput: [],
  },
};

const pattern = {
  containsNumnber: {
    rules: {
      pattern: { criterion: /[0-9]/, message: "Must contain a number" },
    },
    value: "abc",
    expectedOutput: [{ name: "testField", message: "Must contain a number" }],
  },

  isAValidEmail: {
    rules: {
      pattern: {
        criterion: regex.email,
        message: "Must be a valid email",
      },
    },
    value: "abcgmail.com",
    expectedOutput: [{ name: "testField", message: "Must be a valid email" }],
  },

  isValidURI: {
    rules: {
      pattern: {
        criterion: regex.uri,
        message: "Must be a valid link",
      },
    },
    value: "httpswwwgooglecom",
    expectedOutput: [{ name: "testField", message: "Must be a valid link" }],
  },

  isAValidEmail2: {
    rules: {
      pattern: {
        criterion: regex.email,
        message: "Must be a valid email",
      },
    },
    value: "sss@gmail.com",
    expectedOutput: [],
  },

  containsLetter: {
    rules: {
      pattern: { criterion: /[a-z]/, message: "Must contain a letter" },
    },
    value: "123",
    expectedOutput: [{ name: "testField", message: "Must contain a letter" }],
  },

  containsSpecialCharacter: {
    rules: {
      pattern: {
        criterion: /[!@#$%^&*]/,
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
        criterion: /[A-Z]/,
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
        criterion: /[a-z]/,
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
        criterion: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/,
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
        criterion: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/,
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
        criterion: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/,
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
        criterion: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/,
        message: "Must contain a capital letter, special character and number",
      },
    },
    value: "abc!@#123ABC",
    expectedOutput: [],
  },

  isValidCUID: {
    rules: {
      pattern: {
        criterion: regex.cuid,
        message: "Must be a valid CUID",
      },
    },
    value: "c123",
    expectedOutput: [{ name: "testField", message: "Must be a valid CUID" }],
  },

  isValidCUID2: {
    rules: {
      pattern: {
        criterion: regex.cuid,
        message: "Must be a valid CUID",
      },
    },
    value: "c123456789",
    expectedOutput: [],
  },
  isValidULID: {
    rules: {
      pattern: {
        criterion: regex.ulid,
        message: "Must be a valid ULID",
      },
    },
    value: "01ARZ3NDEKTSV4RRFFQ69G5FAV",
    expectedOutput: [],
  },
};

const required = {
  pass: {
    rules: {
      required: { criterion: true, message: "Required" },
    },
    value: "",
    expectedOutput: [{ name: "testField", message: "Required" }],
  },
  fail: {
    rules: {
      required: { criterion: true, message: "Required" },
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
        criterion: (value: string) => {
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
        criterion: (value: string) => {
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
        criterion: (value: string) => {
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
        criterion: (value: string) => {
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
        criterion: (value: string) => {
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
        criterion: (value: string) => {
          const specialCharacters = constants.specialCharacters;
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

const multipleRules = {
  case1: {
    rules: {
      required: {
        criterion: true,
        message: "Name is required",
      },
      minLength: {
        criterion: 6,
        message: "Name least 6 characters long",
      },
      maxLength: {
        criterion: 10,
        message: "Name should not exceed 10 characters",
      },
      pattern: {
        criterion: /^[a-zA-Z]+$/,
        message: "Name should contain only letters",
      },
      custom: {
        criterion: (value: string) => {
          if (value.endsWith("*")) {
            return true;
          }
          return false;
        },
        message: "Name should not end with *",
      },
    },
    value: "a2*",
    expectedOutput: [
      { name: "testField", message: "Name least 6 characters long" },
      { name: "testField", message: "Name should contain only letters" },
      { name: "testField", message: "Name should not end with *" },
    ],
  },

  case2: {
    rules: {
      required: {
        criterion: true,
        message: "Name is required",
      },
      minLength: {
        criterion: 6,
        message: "Name least 6 characters long",
      },
      maxLength: {
        criterion: 20,
        message: "Name should not exceed 20 characters",
      },
      pattern: {
        criterion: /^[a-zA-Z]+$/,
        message: "Name should contain only letters",
      },
      custom: {
        criterion: (value: string) => {
          if (value.endsWith("*")) {
            return true;
          }
          return false;
        },
        message: "Name should not end with *",
      },
    },
    value: "alhalees",
    expectedOutput: [],
  },

  case3: {
    rules: {
      required: {
        criterion: true,
        message: "Name is required",
      },
      minLength: {
        criterion: 6,
        message: "Name least 6 characters long",
      },
      maxLength: {
        criterion: 20,
        message: "Name should not exceed 20 characters",
      },
      pattern: {
        criterion: /^[a-zA-Z]+$/,
        message: "Name should contain only letters",
      },
      custom: {
        criterion: (value: string) => {
          if (value.endsWith("*")) {
            return true;
          }
          return false;
        },
        message: "Name should not end with *",
      },
      custom2: "",
    },

    value: "alhalees",
    expectedOutput: [],
  },
};

const mocks = {
  minLength,
  maxLength,
  pattern,
  required,
  custom,
  multipleRules,
};

export default mocks;
