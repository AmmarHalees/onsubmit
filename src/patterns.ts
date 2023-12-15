const email = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
// alphanumeric with spaces
const numeric = /^[0-9]*$/;
const alphanumericWithoutSpaces = /^\w+$/;
const nameWithArabicCharacters =
  /^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ,.'-]+$/;
const supportArabicCharacters =
  /^[a-zA-Z\u0600-\u06FF,-\s\d][\s\da-zA-Z\u0600-\u06FF,-]*$/;
const alphanumeric = /^[-\w\s]+$/;

export {
  email,
  numeric,
  alphanumericWithoutSpaces,
  nameWithArabicCharacters,
  supportArabicCharacters,
  alphanumeric,
};
