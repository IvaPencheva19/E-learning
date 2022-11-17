const router = require("express").Router();
const { isAuth } = require("../middlewares/authMiddleware");
const userService = require("../services/userService");
const authService = require("../services/authService");
const { TOKEN_NAME } = require("../config/constants");
const { getErrorMessage } = require("../utils/errorHelpers");

router.patch("/", isAuth, async (req, res) => {
    const {
        profileData
    } = req.body;

    try {
        const profile = await userService.findById(req.user._id);

        profile.firstName = profileData.firstName;
        profile.lastName = profileData.lastName;
        profile.email = profileData.email;
        profile.imageUrl = profileData.imageUrl;

        await userService.update(profile);

        const user = await userService.find(req.user._id);
        const jwUserToken = await authService.createUserToken(user);

        return res.status(200).json({ [TOKEN_NAME]: jwUserToken });
    } catch (error) {
        // mongoose error
        console.log(getErrorMessage(error));
        return res.status(400).send({ error: getErrorMessage(error) });
    }
});

router.post("/changePassword", isAuth, async (req, res) => {
    // TODO
});

module.exports = router;