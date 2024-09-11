class ApiResponse {
  constructor(res, status = true, statusCode = 200, message, data = null) {
    this.res = res;
    this.status = status;
    this.statusCode = statusCode;
    this.message = message;
    if (status) this.data = data;

    this.response();
  }

  response() {
    this.res.status(this.statusCode).json({
      status: this.status,
      message: this.message,
      docs: this.data,
    });
  }
}

export default ApiResponse;
