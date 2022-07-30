import express from "express";
import { getUsers, Login, Register, Logout } from "../controller/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";
const router = express.Router();

// verifyToken dapat ditambahkan apabila salah satu endpoint membutuhkan akses token
// misal dalam router ini penggunaannya :

// router.get("/users",verifyToken, getUsers);

router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

export default router;
