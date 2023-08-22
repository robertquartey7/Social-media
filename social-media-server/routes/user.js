import { Router } from "express";
import {
  deleteUser,
  updateUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
const router = Router();

router.get("/user/:id", getUser);
router.get("/user", getUsers);
router.delete("/user", deleteUser);
router.delete("/user/:id");
router.put("/user/:id", updateUser);

export default router;
