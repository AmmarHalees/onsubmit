import regex from "../regex";
import constants from "../constants.json";

const minLength = {
  pass: {
    rules: {
      minLength: { criterion: 3, message: "Minimum length is 3" },
    },
    input: "ab",
    expectedOutput: [{ name: "testField", message: "Minimum length is 3" }],
  },
  fail: {
    rules: {
      minLength: { criterion: 3, message: "Minimum length is 3" },
    },
    input: "abc",
    expectedOutput: [],
  },
  case: {
    rules: {
      minLength: { criterion: 3, message: "Minimum length is 3" },
    },
    input: "",
    expectedOutput: [],
  },
};

const maxLength = {
  pass: {
    rules: {
      maxLength: { criterion: 3, message: "Maximum length is 3" },
    },
    input: "abcd",
    expectedOutput: [{ name: "testField", message: "Maximum length is 3" }],
  },
  fail: {
    rules: {
      maxLength: { criterion: 3, message: "Maximum length is 3" },
    },
    input: "abc",
    expectedOutput: [],
  },
};

const pattern = {
  containsNumnber: {
    rules: {
      pattern: { criterion: /[0-9]/, message: "Must contain a number" },
    },
    input: "abc",
    expectedOutput: [{ name: "testField", message: "Must contain a number" }],
  },

  isAValidEmail: {
    rules: {
      pattern: {
        criterion: regex.email,
        message: "Must be a valid email",
      },
    },
    input: "abcgmail.com",
    expectedOutput: [{ name: "testField", message: "Must be a valid email" }],
  },

  isValidURI: {
    rules: {
      pattern: {
        criterion: regex.uri,
        message: "Must be a valid link",
      },
    },
    input: "httpswwwgooglecom",
    expectedOutput: [{ name: "testField", message: "Must be a valid link" }],
  },

  isAValidEmail2: {
    rules: {
      pattern: {
        criterion: regex.email,
        message: "Must be a valid email",
      },
    },
    input: "sss@gmail.com",
    expectedOutput: [],
  },

  containsLetter: {
    rules: {
      pattern: { criterion: /[a-z]/, message: "Must contain a letter" },
    },
    input: "123",
    expectedOutput: [{ name: "testField", message: "Must contain a letter" }],
  },

  containsSpecialCharacter: {
    rules: {
      pattern: {
        criterion: /[!@#$%^&*]/,
        message: "Must contain a special character",
      },
    },
    input: "abc123",
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
    input: "abc123",
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
    input: "ABC123",
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
    input: "abc123",
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
    input: "abc!@#",
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
    input: "abc!@#123",
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
    input: "abc!@#123ABC",
    expectedOutput: [],
  },

  isValidCUID: {
    rules: {
      pattern: {
        criterion: regex.cuid,
        message: "Must be a valid CUID",
      },
    },
    input: "c123",
    expectedOutput: [{ name: "testField", message: "Must be a valid CUID" }],
  },

  isValidCUID2: {
    rules: {
      pattern: {
        criterion: regex.cuid,
        message: "Must be a valid CUID",
      },
    },
    input: "c123456789",
    expectedOutput: [],
  },

};

const required = {
  pass: {
    rules: {
      required: { criterion: true, message: "Required" },
    },
    input: "",
    expectedOutput: [{ name: "testField", message: "Required" }],
  },
  fail: {
    rules: {
      required: { criterion: true, message: "Required" },
    },
    input: "abc",
    expectedOutput: [],
  },
};

// return true means error
const custom = {
  equality: {
    rules: {
      custom: {
        criterion: (criterion: string) => {
          if (criterion !== "ammar") {
            return true;
          }
          return false;
        },
        message: "Name should be ammar",
      },
    },
    input: "ammar",
    expectedOutput: [],
  },

  inequality: {
    rules: {
      custom: {
        criterion: (criterion: string) => {
          if (criterion !== "ammar") {
            return true;
          }
          return false;
        },
        message: "Name should be ammar",
      },
    },
    input: "ahmed",
    expectedOutput: [{ name: "testField", message: "Name should be ammar" }],
  },

  allCaps: {
    rules: {
      custom: {
        criterion: (criterion: string) => {
          if (criterion !== criterion.toUpperCase()) {
            return true;
          }
          return false;
        },
        message: "Name should be all caps",
      },
    },
    input: "AMMAR",
    expectedOutput: [],
  },

  noWhiteSpace: {
    rules: {
      custom: {
        criterion: (criterion: string) => {
          if (criterion.includes(" ")) {
            return true;
          }
          return false;
        },
        message: "Name should not contain white space",
      },
    },
    input: "ammar",
    expectedOutput: [],
  },

  noStarAtTheEnd: {
    rules: {
      custom: {
        criterion: (criterion: string) => {
          if (criterion.endsWith("*")) {
            return true;
          }
          return false;
        },
        message: "Name should not end with *",
      },
    },
    input: "ammar*",
    expectedOutput: [
      { name: "testField", message: "Name should not end with *" },
    ],
  },

  hasAtLeast3SpecialCharacters: {
    rules: {
      custom: {
        criterion: (criterion: string) => {
          const specialCharacters = constants.specialCharacters;
          let count = 0;
          for (let i = 0; i < criterion.length; i++) {
            if (specialCharacters.includes(criterion[i] as string)) {
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
    input: "ammar*",
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
        criterion: (criterion: string) => {
          if (criterion.endsWith("*")) {
            return true;
          }
          return false;
        },
        message: "Name should not end with *",
      },
    },
    input: "a2*",
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
        criterion: (criterion: string) => {
          if (criterion.endsWith("*")) {
            return true;
          }
          return false;
        },
        message: "Name should not end with *",
      },
    },
    input: "alhalees",
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
        criterion: (criterion: string) => {
          if (criterion.endsWith("*")) {
            return true;
          }
          return false;
        },
        message: "Name should not end with *",
      },
      custom2: "",
    },

    input: "alhalees",
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
