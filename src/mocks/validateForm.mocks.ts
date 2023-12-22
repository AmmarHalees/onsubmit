import _regex from "../regex";

const example_from_1 = {
  rules: {
    firstName: {
      required: {
        criterion: true,
        message: "Name is required",
      },
      minLength: {
        criterion: 3,
        message: "Minimum length is 3",
      },
      maxLength: {
        criterion: 10,
        message: "Maximum length is 10",
      },
      pattern: {
        criterion: _regex.alphanumeric,
        message: "Only alphanumeric characters are allowed",
      },
    },
    lastName: {
      required: {
        criterion: true,
        message: "Name is required",
      },
      minLength: {
        criterion: 3,
        message: "Minimum length is 3",
      },
      maxLength: {
        criterion: 10,
        message: "Maximum length is 10",
      },
      pattern: {
        criterion: _regex.alphanumeric,
        message: "Only alphanumeric characters are allowed",
      },
    },
    email: {
      required: {
        criterion: true,
        message: "Email is required",
      },
      pattern: {
        criterion: _regex.email,
        message: "Email is invalid",
      },
    },
    age: {
      required: {
        criterion: true,
        message: "Age is required",
      },
      pattern: {
        criterion: _regex.alphanumeric,
        message: "Only alphanumeric characters are allowed",
      },
    },
  },
  input: {
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
  input: {
    template: "basic",
    title: "Basic",
    description: "Basic form",
    userName: "someUser",
  },

  rules: {
    template: {
      required: {
        criterion: true,
        message: "Template is required",
      },
    },
    title: {
      required: {
        criterion: true,
        message: "Title is required",
      },
      minLength: {
        criterion: 3,
        message: "Minimum length is 3",
      },
      maxLength: {
        criterion: 10,
        message: "Maximum length is 10",
      },
      pattern: {
        criterion: _regex.alphanumeric,
        message: "Only alphanumeric characters are allowed",
      },
    },
    description: {
      required: {
        criterion: true,
        message: "Description is required",
      },
      minLength: {
        criterion: 3,
        message: "Minimum length is 3",
      },
      maxLength: {
        criterion: 10,
        message: "Maximum length is 10",
      },
      pattern: {
        criterion: _regex.alphanumeric,
        message: "Only alphanumeric characters are allowed",
      },
    },
    userName: {
      required: {
        criterion: true,
        message: "Username is required",
      },
      minLength: {
        criterion: 3,
        message: "Minimum length is 3",
      },
      maxLength: {
        criterion: 10,
        message: "Maximum length is 10",
      },
      pattern: {
        criterion: _regex.kebabCase,
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
