const router = require("express").Router();
const authService = require("../services/authService");
const { isAuth, isGuest } = require("../middlewares/authMiddleware");
const { COOKIE_SESSION_NAME } = require("../constants");
//const { getErrorMessage } = require("../utils/errorHelpers");

// login
router.get("/login", isGuest, (req, res) => {
  res.render("auth/login");
});

router.post("/login", isGuest, async (req, res) => {
  const { email, password } = req.body;

  const user = await authService.login(email, password);
  const jwUserToken = await authService.createUserToken(user);

  res.cookie(COOKIE_SESSION_NAME, jwUserToken, {
    httpOnly: true,
  });
  res.redirect("/");
});

// register
router.get("/register", isGuest, (req, res) => {
  res.render("auth/register");
});

router.post("/register", isGuest, async (req, res) => {
  const { password, repeatPassword, ...userData } = req.body;

  if (password !== repeatPassword) {
    return res.render("auth/register", {
      error: "Passwords missmatch!",
    });
  }

  try {
    const createdUser = await authService.create({
      password,
      ...userData,
    });
    const jwUserToken = await authService.createUserToken(createdUser);
    res.cookie(COOKIE_SESSION_NAME, jwUserToken, {
      httpOnly: true,
    });
    res.redirect("/");
  } catch (error) {
    // add mongoose error mapper
    return res.render("auth/register", {
      error: getErrorMessage(error),
    });
  }
});

// logout
router.get("/logout", isAuth, (req, res) => {
  res.clearCookie(COOKIE_SESSION_NAME);
  res.redirect("/");
});

router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;
