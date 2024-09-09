import jwt from "jsonwebtoken";
import ApiResponse from "../helpers/ApiResponse.js";
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export const isAuthenticated = (req, res, next) => {
  let token = null;

  //check for token in headers or cookies
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split("/s+")[1];
  }
  if (req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token)
    return new ApiResponse(res, 400, false, "Not authorized, token is missing");

  // Verify the token
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // Attach the decoded token (user id) to req.user
    req.user = decoded;
    next();
  } catch (err) {
    return new ApiResponse(req, false, 401, "Invalid token");
  }
};
