// Custom error types
class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

class DatabaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DatabaseError";
  }
}

// Other error types can be added as needed

// Error Handling Utility
function handleError(error: Error): void {
  switch (error.constructor) {
    case NetworkError:
      console.log("Handle network error:", error.message);
      // specific logic for NetworkError
      break;
    case ValidationError:
      console.log("Handle validation error:", error.message);
      // specific logic for ValidationError
      break;
    case DatabaseError:
      console.log("Handle database error:", error.message);
      // specific logic for DatabaseError
      break;
    default:
      console.log("Handle general error:", error.message);
      // logic for unrecognized error types
      break;
  }
}

// Example usage
try {
  // Code that may throw errors
  throw new ValidationError("Invalid input data");
} catch (error) {
  if (error instanceof Error) {
    handleError(error);
  }
}
