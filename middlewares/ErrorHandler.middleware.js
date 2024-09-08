const ErrorHandler = (err, req, res, next) => {
  // Default values for statusCode and message
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    message,
  });
};


export default ErrorHandler;