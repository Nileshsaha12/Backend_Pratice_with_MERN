import { Router } from "express";
import { refreshAccessToken,loggoutUser, loginUser, registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { veriftJWT } from "../middlewares/auth.middleware.js";
const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser)

router.route("/login").post(loginUser)

//secure Routes

router.route("/logout").post(veriftJWT, loggoutUser)
router.route("/refresh-token").post(refreshAccessToken)
export default router