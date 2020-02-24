import express from "express";
import { createPost, retrievePosts } from "../controllers/postController";

const router = express.Router();

// Create post
router.post("/create", (req, res) => createPost(req, res));

// Retrieve posts
router.get("/retrieve", (req, res) => retrievePosts(req, res));

export default router;
