class ApiResponse {
  constructor(
    res,
    status = true,
    statusCode = 200,
    message,
    data = null,
    redirect = null
  ) {
    this.res = res;
    this.status = status;
    this.statusCode = statusCode;
    this.message = message;
    if (status) this.data = data;
    if (redirect) this.redirect = redirect;
    this.response();
  }

  response() {
    this.res.status(this.statusCode).json({
      status: this.status,
      message: this.message,
      redirectUrl: this.redirect,
      docs: this.data,
    });
  }
}

export default ApiResponse;
