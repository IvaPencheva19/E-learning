const router = require("express").Router();
const authService = require("../services/authService");
const { isGuest } = require("../middlewares/authMiddleware");
const { COOKIE_SESSION_NAME } = require("../constants");
const { getErrorMessage } = require("../utils/errorHelpers");

router.post("/login", isGuest, async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await authService.login(email, password);

    const jwUserToken = await authService.createUserToken(user);

    res.cookie(COOKIE_SESSION_NAME, jwUserToken, {
      httpOnly: true,
    });

    return res
      .status(200)
      .send();
  } catch (error) {
    return res
      .status(400)
      .send({ error: getErrorMessage(error) });
  }


});

router.post("/register", isGuest, async (req, res) => {

  const { password, repeatPassword, ...userData } = req.body;
  if (password !== repeatPassword) {
    return res
      .status(400)
      .send({ error: "Passwords missmatch!" });
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

    return res.
      status(201).
      send();

  } catch (error) {
    // mongoose error
    return res
      .status(400)
      .send({ error: getErrorMessage(error) });
  }
});

// router.get("/logout", isAuth, (req, res) => {
//   res.clearCookie(COOKIE_SESSION_NAME);
//   return res
//     .status(204)
//     .send();
// });

router.get("/404", (req, res) => { 
  return res
    .status(404)
    .send({ error: "Page not found" });
});

module.exports = router;
