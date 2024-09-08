export const signIn = async (req, res, next) => {
  return res.render("signin", { title: "Review System | SignIn" });
};

export const signUp = async (req, res, next) => {
  return res.render("signup", { title: "Review System | SignUp" });
};
