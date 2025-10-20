import express from "express";
import {
  getposts,
  createpost,
  getsinglepost,
  updatepost,
  deletepost,
} from "../controllers/postControllers.js";
const router = express.Router();

router.get("/posts", getposts);
router.post("/createpost", createpost);
router.get("/post/:id", getsinglepost);
router.put("/updatepost/:id", updatepost);
router.delete("/deleteposts/:id", deletepost);

export default router;
