const router = require("express").Router();
const { isAuth } = require("../middlewares/authMiddleware");
const userService = require("../services/userService");
const authService = require("../services/authService");
const { TOKEN_NAME } = require("../config/constants");
const { getErrorMessage } = require("../utils/errorHelpers");
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/env");


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

router.patch("/password", isAuth, async (req, res) => {
    const { password, newPassword } = req.body;
    try {
        const user = await userService.findById(req.user._id);

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw {
                message: `Wrong password!`,
            };
        }

        bcrypt.hash(newPassword, SALT_ROUNDS)
            .then(async (hashedPassword) => {
                user.password = hashedPassword;
                await userService.update(user);
                return res.status(200).json('success');
            })
            .catch((err) => console.log(err));


    } catch (error) {
        // mongoose error
        return res.status(400).send({ error: getErrorMessage(error) });
    }
});

module.exports = router;