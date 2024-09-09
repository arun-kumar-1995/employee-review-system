import ApiResponse from "../helpers/ApiResponse.js";
import CatchAsyncError from "../middlewares/CatchAsyncError.js";
import getSignInToken from "../helpers/GetSignInToken.js";
import User from "../models/user.models.js";

export const signIn = async (req, res, next) => {
  return res.render("signin", { title: "Review System | SignIn" });
};

export const signUp = async (req, res, next) => {
  return res.render("signup", { title: "Review System | SignUp" });
};

export const create = async (req, res, next) => {
  const { username, password, confirmPassword, email, role } = req.body;
  console.log(req.body);

  const user = await User.findOne({ email });
  if (user) return new ApiResponse(res, false, 400, "User already exists");

  if (password !== confirmPassword)
    return new ApiResponse(res, false, 400, "Passwords do not match");

  // create user
  await User.create({
    username,
    email,
    password,
    role,
  });

  return new ApiResponse(res, true, 201, "User created");
};

export const createSession = CatchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  // check for user existence
  const user = await User.findOne({ email });
  if (!user) return new ApiResponse(res, false, 404, "User not found");

  // if user match passowrd
  const match = await user.matchPassword(password);
  if (!match)
    return new ApiResponse(res, false, 400, "Invalid email or password");

  //get token
  // const token = getSignInToken(user._id);
  // create cookie
  res.cookie("token", token, {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ), // 7 days
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Only send over HTTPS in production
  });

  return new ApiResponse(res, true, 200, "You are logged in", { token });
});
