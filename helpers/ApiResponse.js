class ApiResponse {
    constructor(res, status = true, statusCode = 200, message, data = null) {
      this.res = res;
      this.status = status;
      this.statusCode = statusCode;
      this.message = message;
      this.data = data;
      this.response();  // Automatically call response when instantiated
    }
  
    response() {
      // Use `this` to refer to the instance variables
      this.res.status(this.statusCode).json({
        status: this.status,
        message: this.message,
        docs: this.data,
      });
    }
  }
  
  export default ApiResponse;
  