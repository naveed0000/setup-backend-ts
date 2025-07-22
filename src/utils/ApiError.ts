class ApiError<T = null> extends Error {
  statusCode: number;
  data: T;
  success: boolean;
  errors: string[] | object[];

  constructor(
    statusCode: number,
    message = "Something went wrong",
    errors: string[] | object[] = [],
    data: T = null as T,
    stack = ""
  ) {
    super(message);

    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.data = data;
    this.success = false;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
