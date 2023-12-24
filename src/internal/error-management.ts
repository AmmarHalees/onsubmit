type ERROR_NAMES = "TYPE_ERROR" | "MAPPING_ERROR";

class MappingError extends Error {
  constructor(
    message: string = "Mapping Error",
    name: ERROR_NAMES = "MAPPING_ERROR"
  ) {
    super();
    this.name = name;
    this.message = message;
  }
}

class CustomTypeError extends Error {
  constructor(
    message: string = "Type Error",
    name: ERROR_NAMES = "TYPE_ERROR"
  ) {
    super();
    this.name = name;
    this.message = message;
  }
}

class RequiredParamError extends Error {
  constructor(paramName: string) {
    super();
    this.name = "RequiredParamError";
    this.message = `${paramName} is required`;
  }
}

function handleError(error: Error) {
  if (error.name === "TYPE_ERROR") {
    console.error("Type Error:", error.message);
  } else if (error.name === "TYPE_ERROR") {
    console.error("Mapping Error:", error.message);
  } else {
    console.error(
      "Internal Error",
      error.message,
      "Please report this at" + "https://github.com/AmmarHalees/onsubmit/issues"
    );
  }
}
export { MappingError, CustomTypeError, RequiredParamError, handleError };
