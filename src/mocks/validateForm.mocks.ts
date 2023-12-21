import _regex from "../regex";

const example_from_1 = {
  rules: {
    firstName: {
      required: {
        value: true,
        message: "Name is required",
      },
      minLength: {
        value: 3,
        message: "Minimum length is 3",
      },
      maxLength: {
        value: 10,
        message: "Maximum length is 10",
      },
      pattern: {
        value: _regex.alphanumeric,
        message: "Only alphanumeric characters are allowed",
      },
    },
    lastName: {
      required: {
        value: true,
        message: "Name is required",
      },
      minLength: {
        value: 3,
        message: "Minimum length is 3",
      },
      maxLength: {
        value: 10,
        message: "Maximum length is 10",
      },
      pattern: {
        value: _regex.alphanumeric,
        message: "Only alphanumeric characters are allowed",
      },
    },
    email: {
      required: {
        value: true,
        message: "Email is required",
      },
      pattern: {
        value: _regex.email,
        message: "Email is invalid",
      },
    },
    age: {
      required: {
        value: true,
        message: "Age is required",
      },
      pattern: {
        value: _regex.alphanumeric,
        message: "Only alphanumeric characters are allowed",
      },
    },
  },
  value: {
    firstName: "John",
    lastName: "Doe",
    email: "ammarmail.com",
    age: "20",
  },
  expectedOutput: [
    {
      name: "email",
      message: "Email is invalid",
    },
  ],
};

const example_from_2 = {
  value: {
    template: "basic",
    title: "Basic",
    description: "Basic form",
    userName: "someUser",
  },

  rules: {
    template: {
      required: {
        value: true,
        message: "Template is required",
      },
    },
    title: {
      required: {
        value: true,
        message: "Title is required",
      },
      minLength: {
        value: 3,
        message: "Minimum length is 3",
      },
      maxLength: {
        value: 10,
        message: "Maximum length is 10",
      },
      pattern: {
        value: _regex.alphanumeric,
        message: "Only alphanumeric characters are allowed",
      },
    },
    description: {
      required: {
        value: true,
        message: "Description is required",
      },
      minLength: {
        value: 3,
        message: "Minimum length is 3",
      },
      maxLength: {
        value: 10,
        message: "Maximum length is 10",
      },
      pattern: {
        value: _regex.alphanumeric,
        message: "Only alphanumeric characters are allowed",
      },
    },
    userName: {
      required: {
        value: true,
        message: "Username is required",
      },
      minLength: {
        value: 3,
        message: "Minimum length is 3",
      },
      maxLength: {
        value: 10,
        message: "Maximum length is 10",
      },
      pattern: {
        value: _regex.kebabCase,
        message: "Only kebab case",
      },
    },
  },

  expectedOutput: [
    {
      name: "userName",
      message: "Only kebab case",
    },
  ],
};

const mocks = {
  example_from_1,
  example_from_2,
};

export default mocks;
