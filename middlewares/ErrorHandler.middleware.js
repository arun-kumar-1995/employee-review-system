const ErrorHandler = (err, req, res, next) => {
  // Default values for statusCode and message
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // duplicate key error
  if (err.code === 11000) {
    statusCode = 400;
    const field = Object.keys(err.keyValue)[0];
    message = `Duplicate value for ${field}. Please use a different value.`;
  }

  // MongoDB connection errors
  if (err.name === "MongoNetworkError") {
    statusCode = 503;
    message = "Unable to connect to the database. Please try again later.";
  }

  // invalid jwt error
  if (err.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "Invalid token. Please log in again.";
  }

  // jwt expire
  if (err.name === "TokenExpiredError") {
    statusCode = 401;
    message = "Your token has expired. Please log in again.";
  }

  // sending the response
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

export default ErrorHandler;
