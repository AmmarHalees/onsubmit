type ERROR_NAMES = "TYPE_ERROR" | "MAPPING_ERROR";

class MappingError extends Error {
  constructor(
    message: string = "Validation Error",
    name: ERROR_NAMES = "MAPPING_ERROR"
  ) {
    super();
    this.name = name;
    this.message = message;
  }
}

class TypeError extends Error {
  constructor(
    message: string = "Type Error",
    name: ERROR_NAMES = "TYPE_ERROR"
  ) {
    super();
    this.name = name;
    this.message = message;
  }
}

// Other error types can be added as needed

// Error Handling Utility
function handleError(error: Error): void {
  switch (error.constructor) {
    case TypeError:
      console.log("Type Error:", error.message);
      break;
    case MappingError:
      console.log("Mapping Error:", error.message);
      break;
    default:
      console.log(
        "Internal Error",
        error.message,
        "Please report this at" +
          "https://github.com/AmmarHalees/onsubmit/issues"
      );
      break;
  }
}

export { MappingError, handleError };
