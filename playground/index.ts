import { validateForm } from "../src/core/validateForm";

const data = {
  sss: "Ammar",
  lastName: "Halees",
  portfolio: "https://ssss.com",
  bio: "wdwdsss",
  phoneNumber: "3232",
  email: "info@nuclue.com",
  startHour: "18:02",
  endHour: "18:02",
  speciality: "data_analytics",
};

const rules = {
  firstName: {
    required: {
      value: true,
      message: "First name is required",
    },
    minLength: {
      value: 5,
      message: "First name must be at least 5 characters",
    },
    maxLength: {
      value: 20,
      message: "First name must be at most 20 characters",
    },
    pattern: {
      value: /^[a-zA-Z0-9_ ]*$/,
      message: "First name must be a valid name",
    },
  },
  lastName: {
    required: {
      value: true,
      message: "Last name is required",
    },
    minLength: {
      value: 5,
      message: "Last name must be at least 5 characters",
    },
    maxLength: {
      value: 20,
      message: "Last name must be at most 20 characters",
    },
  },
  portfolio: {
    pattern: {
      value: /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/,
      message: "Portfolio must be a valid URL",
    },
  },
  bio: {
    minLength: {
      value: 50,
      message: "Bio must be at least 50 characters",
    },
    pattern: {
      value: /^[a-zA-Z0-9_ ]*$/,
      message: "Bio must be a valid bio",
    },
    maxLength: {
      value: 100,
      message: "Bio must be at most 100 characters",
    },
  },
  phoneNumber: {
    pattern: {
      value: /^\+?[0-9]{10,14}$/,
      message: "Phone number must be a valid phone number",
    },
  },
  email: {
    required: {
      value: true,
      message: "Email is required",
    },
    minLength: {
      value: 5,
      message: "Email must be at least 5 characters",
    },

    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Email must be a valid email",
    },
  },
  startHour: {
    required: {
      value: true,
      message: "Start hour is required",
    },
    pattern: {
      value: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
      message: "Start hour must be a valid hour",
    },
  },
  endHour: {
    required: {
      value: true,
      message: "End hour is required",
    },
    pattern: {
      value: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
      message: "End hour must be a valid hour",
    },
  },
  speciality: {
    required: {
      value: true,
      message: "Speciality is required",
    },
  },
};

const errors = validateForm(data, rules);

console.log(errors);
