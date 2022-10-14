const jwt = require("jsonwebtoken");
const { COOKIE_SESSION_NAME } = require("../constants");
const { SECRET } = require("../config/env");

exports.auth = (req, res, next) => {
  const token = req.cookies[COOKIE_SESSION_NAME];

  if (token) {
    const decodedToken = jwt.verify(token, SECRET, (err, decodedToken) => {
      if (err) {
        res.clearCookie(COOKIE_SESSION_NAME);

        return res
          .status(401)
          .send();
      }

      req.user = decodedToken;
      res.locals.user = decodedToken;
      next();
    });
  } else {
    next();
  }
};

exports.isAuth = (req, res, next) => {
  if (!req.user) {
    // return res.redirect('/auth/login');
    return res.redirect("404");
  }

  next();
};

exports.isGuest = (req, res, next) => {
  if (req.user) {
    return res.redirect("/");
  }

  next();
};
