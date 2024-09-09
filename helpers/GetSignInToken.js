import jwt from "jsonwebtoken";
const { JWT_SECRET, TOKEN_EXPIRE } = process.env;
const getSignInToken = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, {
    expiresIn: TOKEN_EXPIRE || "7d",
  });
};

export default getSignInToken;
