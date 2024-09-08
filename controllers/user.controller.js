import ApiResponse from "../helpers/ApiResponse.js";
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
