type ERROR_NAMES = "TYPE_ERROR" | "MAPPING_ERROR" | "REQUIRED_PARAM_ERROR";

class MappingError extends Error {
  constructor(
    message: string = "Mapping Error",
    name: ERROR_NAMES = "MAPPING_ERROR"
  ) {
    super();
    this.name = name;
    this.message = `Mapping Error: ${message}`;
  }
}

class CustomTypeError extends TypeError {
  constructor(
    message: string = "Type Error",
    name: ERROR_NAMES = "TYPE_ERROR"
  ) {
    super();
    this.name = name;
    this.message = `Bad arguments: ${message}`;
  }
}

class RequiredParamError extends TypeError {
  constructor(
    message: string = "Required Param Error",
    name: ERROR_NAMES = "REQUIRED_PARAM_ERROR"
  ) {
    super();
    this.name = name;
    this.message = `Required param: ${message}`;
  }
}

function handleError(error: Error) {
  if (error.name === "TYPE_ERROR") {
    console.error(error.message);
  } else if (error.name === "REQUIRED_PARAM_ERROR") {
    console.error(error.message);
  } else if (error.name === "MAPPING_ERROR") {
    console.error(error.message);
  } else {
    console.error(
      "Internal Error",
      error.message,
      "Please report this at" + "https://github.com/AmmarHalees/onsubmit/issues"
    );
  }
}
export { MappingError, CustomTypeError, RequiredParamError, handleError };
