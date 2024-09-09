const checkAuth = (req, res, next) => {
  let cookie_data;
  const _session = req.cookies._session;
  if (_session) {
    cookie_data = JSON.parse(_session);
  }
  req.isAuthenticated = () => !!cookie_data?.token;
  req.user = cookie_data?.user;
  next();
};

export default checkAuth;
