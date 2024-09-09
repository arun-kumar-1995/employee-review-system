const CatchAsyncError = (controller) => (req, res, next) => {
  // Catch any errors and pass to next middleware
  Promise.resolve(controller(req, res, next)).catch(next);
};

export default CatchAsyncError;
