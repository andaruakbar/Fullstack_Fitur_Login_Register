import express from "express";
import { getUsers, Login, Register } from "../controller/Users.js";
const router = express.Router();

router.get("/users", getUsers);
router.post("/users", Register);
router.post("/login", Login);

export default router;
