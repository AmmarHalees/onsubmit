//isInSecure

import constants from "../constants.json";
const inSecureCharacters = constants.InSecureCharachters;

export default (value: unknown): value is string => {
  if (typeof value !== "string") {
    return false;
  }
  return inSecureCharacters.some((char) => value.includes(char));
};
